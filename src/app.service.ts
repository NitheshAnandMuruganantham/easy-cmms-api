import { Injectable, OnModuleInit } from '@nestjs/common';
import { RedisService } from '@liaoliaots/nestjs-redis';
import { PrismaService } from 'nestjs-prisma';
import { Redis } from 'ioredis';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';

@Injectable()
export class AppService implements OnModuleInit {
  redis: Redis;
  constructor(
    private readonly prisma: PrismaService,
    private readonly scheduler: SchedulerRegistry,
    private readonly redisService: RedisService,
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
        `routine_maintanances_${data.id}`,
      );
      if (cronExists) {
        this.scheduler.deleteCronJob(`routine_maintanances_${data.id}`);
      }
      this.scheduler.addCronJob(
        `routine_maintanances_${data.id}`,
        new CronJob(data.cron, async () => {
          await this.prisma.maintenance.create({
            data: {
              machine_id: data.meachine_id,
              name: data.name,
              description: data.description,
              resolved: false,
              un_planned: false,
              from: data.from,
              to: data.to,
              assignee_id: data.assignee_id,
            },
          });
        }),
      );
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
}
