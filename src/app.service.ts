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

  async getPastMaintenances(
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
            { ...where },
          ],
        },
        take: take || 30,
        skip,
        orderBy: [
          {
            created_at: 'desc',
          },
        ],
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

  async getBlockSettings(block_id: bigint) {
    const data = await this.prisma.block_settings.findMany({
      where: {
        block_id,
      },
    });
    let result = {};
    data.forEach((item) => {
      result[item.name] = item.value;
    });
    return result;
  }
  inputProduction(data: any, block_id: bigint, user_id: bigint) {
    return this.prisma.production_data.create({
      data: {
        from: data.from,
        to: data.to,
        actual_production: data.actual_production,
        target_production: data.target_production,
        total_down_time: data.total_down_time,
        total_run_time: data.total_run_time,
        updatedBy: {
          connect: {
            id: user_id,
          },
        },
        Block: {
          connect: {
            id: block_id,
          },
        },
      },
    });
  }

  async inputPastMaintenance(data: any, user_id: any) {
    const photo_url = await this.s3Service.uploadBase64Image(
      data.photo,
      `${nanoid(10)}`,
    );
    return this.prisma.maintenance.create({
      data: {
        description: data.description,
        photo: photo_url,
        from: data.from,
        to: data.to,
        name: data.name,
        resolved: true,
        un_planned: true,
        machines: {
          connect: {
            id: data.machine_id,
          },
        },
        assignee: {
          connect: {
            id: user_id,
          },
        },
      },
    });
  }

  async punchProduction(user_id: string, data: any) {
    const user = await this.prisma.users.findUnique({
      where: {
        user_auth_id: user_id,
      },
    });
    let from = new Date();
    let to = new Date();
    if (data.shift === 'A') {
      from.setHours(6, 0, 0, 0);
      to.setHours(14, 0, 0, 0);
    } else if (data.shift === 'B') {
      from.setHours(14, 0, 0, 0);
      to.setHours(22, 0, 0, 0);
    } else if (data.shift === 'C') {
      from = new Date(
        new Date(from.setHours(22, 0, 0, 0)).setDate(from.getDate() - 1),
      );
      to.setHours(6, 0, 0, 0);
    }
    const production = await this.prisma.production_data.create({
      data: {
        from,
        to,
        actual_production: data.actual_production,
        target_production: data.target_production,
        total_down_time: data.total_down_time,
        total_run_time: data.total_run_time,
        updatedBy: {
          connect: {
            id: user.id,
          },
        },
      },
    });
    await this.twilio.client.messages
      .create({
        body: `Production punched by ${user.name} at ${new Date()} for shift ${
          data.shift
        }`,
        to: user.phone,
      })
      .catch((err) => undefined);
    return production;
  }
}
