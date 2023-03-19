import { Injectable, OnModuleInit } from '@nestjs/common';
import { RedisService } from '@liaoliaots/nestjs-redis';
import { PrismaService } from 'nestjs-prisma';
import { Redis } from 'ioredis';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { ForbiddenError } from 'apollo-server-core';
import { nanoid } from 'nanoid';
import { S3Service } from 'src/s3/s3.service';
import { TwilioService } from 'nestjs-twilio';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService implements OnModuleInit {
  redis: Redis;
  constructor(
    private readonly prisma: PrismaService,
    private readonly scheduler: SchedulerRegistry,
    private readonly redisService: RedisService,
    private readonly s3Service: S3Service,
    private readonly twilio: TwilioService,
    private readonly config: ConfigService,
  ) {
    this.redis = this.redisService.getClient();
  }
  onModuleInit() {
    console.log('bootstrapping..................');
    Promise.all([this.getCrons()]);
  }
  getHello(): string {
    return 'Hello World!';
  }

  async getCrons() {
    console.log('starting cron jobs 🕐');
    const crons = await this.prisma.routine_maintanances.findMany();
    crons.forEach(async (data) => {
      const cronExists = this.scheduler.doesExist(
        'cron',
        `routine_maintenances_${data.id}`,
      );
      if (cronExists) {
        this.scheduler.deleteCronJob(`routine_maintenances_${data.id}`);
      }
      const j = new CronJob(data.cron, async () => {
        const from = new Date();
        from.setHours(from.getHours() + 1);
        const to = new Date(from);
        to.setHours(to.getMinutes() + data.duration);
        const result = await this.prisma.maintenance.create({
          data: {
            machine_id: data.meachine_id,
            name: data.name,
            description: data.description,
            resolved: false,
            un_planned: false,
            from: from,
            to: to,
            assignee_id: data.assignee_id,
          },
          include: {
            assignee: true,
            machines: {
              include: {
                machine_catagory: true,
                block: true,
                section: true,
              },
            },
          },
        });

        this.twilio.client.messages
          .create({
            to: result.assignee.phone,
            from: this.config.get('TWILIO_FROM'),
            body:
              `New maintenance request\n` +
              `Name: ${data.name}\n` +
              `Description: ${result.description}\n` +
              `Machine : ${result.machines.label}\n` +
              `Category: ${result.machines.machine_catagory.name}\n` +
              `Block: ${result.machines.block.name}\n` +
              `Section: ${result.machines.section.name}\n` +
              `from : ${result.from.toLocaleString()}\n` +
              `to : ${result.to.toLocaleString()}\n`,
          })
          .catch(() => null);
      });
      this.scheduler.addCronJob(`routine_maintenances_${data.id}`, j);
      j.start();
    });
  }
  getHealth() {
    return 'ok';
  }

  getMachines(take: number, skip: number, orderBy: any, where: any) {
    return this.prisma.machines.findMany({
      where,
      take,
      skip,
      orderBy,
      include: {
        machine_catagory: true,
        block: true,
        section: true,
      },
    });
  }

  async getMaintenances(
    session: SessionContainer,
    take: number,
    skip: number,
    orderBy: any,
    where: any,
  ) {
    const user_id = session.getUserId();
    const user = await this.prisma.users.findUnique({
      where: {
        user_auth_id: user_id,
      },
    });
    if (user.role === 'FITTER') {
      return this.prisma.maintenance.findMany({
        where: {
          AND: [
            {
              assignee_id: user.id,
            },
            {
              resolved: false,
            },
            { ...where },
          ],
        },
        take,
        skip,
        orderBy,
        include: {
          assignee: true,
          ticket: true,
          machines: {
            include: {
              machine_catagory: true,
              block: true,
              section: true,
            },
          },
        },
      });
    } else {
      return this.prisma.maintenance.findMany({
        where,
        take,
        skip,
        orderBy,
        include: {
          assignee: true,
          ticket: true,
          machines: {
            include: {
              machine_catagory: true,
              block: true,
              section: true,
            },
          },
        },
      });
    }
  }

  getRoutine(take: number, skip: number, orderBy: any, where: any) {
    return this.prisma.routine_maintanances.findMany({
      where,
      take,
      skip,
      orderBy,
      include: {
        assignee: true,
        meachine: {
          include: {
            machine_catagory: true,
            block: true,
            section: true,
          },
        },
      },
    });
  }

  async getTickets(
    session: SessionContainer,
    take: number,
    skip: number,
    orderBy: any,
    where: any,
  ) {
    const user = await this.prisma.users.findUnique({
      where: {
        user_auth_id: session.getUserId(),
      },
    });
    if (user.role === 'SUPERVISOR') {
      return this.prisma.ticket.findMany({
        where: {
          AND: [
            {
              user_id: {
                equals: user.id,
              },
            },
            {
              status: {
                not: 'CLOSED',
              },
            },
          ],
        },
        take,
        skip,
        orderBy,
        include: {
          user: true,
          machines: {
            include: {
              machine_catagory: true,
              block: true,
              section: true,
            },
          },
        },
      });
    } else {
      return this.prisma.ticket.findMany({
        where,
        take,
        skip,
        orderBy,
        include: {
          user: true,
          machines: {
            include: {
              machine_catagory: true,
              block: true,
              section: true,
            },
          },
        },
      });
    }
  }
  async raiseTicket(session: SessionContainer, data: any) {
    const user = await this.prisma.users.findUnique({
      where: {
        user_auth_id: session.getUserId(),
      },
    });
    if (!user) {
      throw new ForbiddenError('user not exists');
    } else if (user.role !== 'SUPERVISOR') {
      throw new ForbiddenError('permission error');
    } else {
      const photos = await this.s3Service.uploadBase64Image(
        data.photos,
        `${nanoid(10)}`,
      );
      const result = await this.prisma.ticket.create({
        data: {
          user_id: user.id,
          name: data.name,
          description: data.description,
          machine_id: data.machine_id,
          status: 'OPEN',
          photos,
        },
      });
      return result;
    }
  }

  getBlockSettings(block_id: number) {
    return this.prisma.block_settings.findMany({
      where: {
        block_id,
      },
    });
  }
}
