import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import SessionContainer from './types/session';
import { accessibleBy } from '@casl/prisma';
import { v4 as uuid } from 'uuid';
import { S3Service } from 'src/s3/s3.service';
import { TwilioService } from 'nestjs-twilio';
import { ConfigService } from '@nestjs/config';
import { CaslAbilityFactory } from './casl/casl.ability';
import { ForbiddenError } from '@casl/ability';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    private readonly prisma: PrismaService,
    private readonly scheduler: SchedulerRegistry,
    private readonly s3Service: S3Service,
    private readonly twilio: TwilioService,
    private readonly casl: CaslAbilityFactory,
    private readonly config: ConfigService,
    @Inject(CACHE_MANAGER) private cacheService: Cache,
  ) {}
  onModuleInit() {
    console.log('bootstrapping..................');
    Promise.all([this.getCrons()]);
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
        const randomWaitMilliSeconds = Math.floor(Math.random() * 10000);
        await new Promise((resolve) =>
          setTimeout(resolve, randomWaitMilliSeconds),
        );
        await this.cacheService.set(
          `lock_route_maintenance_${data.id}`,
          true,
          20000,
        );
        try {
          const from = new Date();
          from.setHours(from.getHours() + 1);
          const to = new Date(from);
          to.setHours(to.getMinutes() + data.duration);
          const result = await this.prisma.maintenance.create({
            data: {
              block_id: data.block_id,
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
        } catch (e) {
          throw new Error(e);
        } finally {
          await this.cacheService.del(`lock_route_maintenance_${data.id}`);
        }
      });
      this.scheduler.addCronJob(`routine_maintenances_${data.id}`, j);
      j.start();
    });
  }
  getHealth() {
    return 'ok';
  }

  async getMachines(
    session: SessionContainer,
    take: number,
    skip: number,
    orderBy: any,
    where: any = {},
  ) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'Machines');

    return this.prisma.machines.findMany({
      where: { AND: [where, accessibleBy(ability).Machines] },
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
    where: any = {},
  ) {
    if (session.User.role === 'FITTER') {
      return this.prisma.maintenance.findMany({
        where: {
          AND: [
            {
              assignee_id: session.User.id,
            },
            {
              block_id: session.User.blockId,
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
        where: {
          AND: [
            {
              ...where,
            },
            {
              block_id: session.User.blockId,
            },
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
    }
  }

  async getPastMaintenances(
    session: SessionContainer,
    take: number,
    skip: number,
    orderBy: any,
    where: any = {},
  ) {
    if (session.User.role === 'FITTER') {
      return this.prisma.maintenance.findMany({
        where: {
          AND: [
            {
              assignee_id: session.User.id,
            },
            {
              block_id: session.User.blockId,
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
        where: {
          AND: [
            {
              ...where,
            },
            {
              block_id: session.User.blockId,
            },
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
    }
  }

  async getRoutine(
    session: SessionContainer,
    take: number,
    skip: number,
    orderBy: any,
    where: any = {},
  ) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);

    ForbiddenError.from(ability).throwUnlessCan('read', 'RoutineMaintanances');

    return this.prisma.routine_maintanances.findMany({
      where: {
        AND: [
          where,
          {
            block_id: {
              equals: session.User.blockId,
            },
          },
        ],
      },
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
    where: any = {},
  ) {
    if (session.User.role === 'SUPERVISOR') {
      return this.prisma.ticket.findMany({
        where: {
          AND: [
            {
              user_id: {
                equals: session.User.id,
              },
            },
            {
              block_id: {
                equals: session.User.blockId,
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
        where: {
          AND: [
            where,
            {
              block_id: {
                equals: session.User.blockId,
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
    }
  }
  async raiseTicket(session: SessionContainer, data: any) {
    const photos = await this.s3Service.uploadBase64Image(
      data.photos,
      `${uuid()}`,
    );
    const result = await this.prisma.ticket.create({
      data: {
        block_id: session.User.blockId,
        user_id: session.User.id,
        name: data.name,
        description: data.description,
        machine_id: data.machine_id,
        status: 'OPEN',
        photos,
      },
    });
    return result;
  }

  async getBlockSettings(session: SessionContainer) {
    const data = await this.prisma.block_settings.findMany({
      where: {
        block_id: session.User.blockId,
      },
    });
    const result = {};
    data.forEach((item) => {
      result[item.name] = item.value;
    });
    return result;
  }

  async inputPastMaintenance(session: SessionContainer, data: any) {
    const photo_url = await this.s3Service.uploadBase64Image(
      data.photo,
      `${uuid()}`,
    );
    return this.prisma.maintenance.create({
      data: {
        block: {
          connect: {
            id: session.User.blockId,
          },
        },
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
            id: session.User.id,
          },
        },
      },
    });
  }

  async requestSpares(session: SessionContainer, data: any) {
    try {
      if (session.User.role !== 'FITTER') {
        throw new Error('Only Fitters can request spares');
      } else {
        const maintanance = await this.prisma.maintenance.findUnique({
          where: {
            id: data.maintenance_id,
          },
        });
        if (maintanance.block_id !== session.User.blockId) {
          throw new Error('You are not authorized to do this');
        } else {
          await this.prisma.replacements.createMany({
            data: data.bom.map((item) => {
              return {
                name: `replacement for maintenance id #${maintanance.id}`,
                description: `maintenance description : ${maintanance.name}`,
                quantity: item.quantity,
                approved: false,
                block_id: session.User.blockId,
                item_id: item.id,
                maintanance_id: data.maintenance_id,
              };
            }),
          });
        }
        return 'ok';
      }
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }

  async getAllReplacementsRequests(session: SessionContainer) {
    if (session.User.role !== 'FITTER') {
      throw new Error('Only Fitters can request spares');
    } else {
      const replacements = await this.prisma.replacements.findMany({
        where: {
          block_id: session.User.blockId,
          maintenance: {
            assignee_id: session.User.id,
          },
        },
        orderBy: {
          created_at: 'desc',
        },
        include: {
          maintenance: true,
          items: true,
        },
      });
      return replacements;
    }
  }
}
