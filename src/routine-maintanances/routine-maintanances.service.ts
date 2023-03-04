import { ForbiddenError, subject } from '@casl/ability';
import { BadRequestException, Injectable } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { PrismaService } from 'nestjs-prisma';
import * as cron from 'cron-validator';
import { CronJob } from 'cron';
import {
  routine_maintanancesCreateInput,
  routine_maintanancesSumOrderByAggregateInput,
  routine_maintanancesUpdateInput,
  routine_maintanancesWhereInput,
} from 'src/@generated/routine-maintanances';
import { CaslAbilityFactory } from 'src/casl/casl.ability';
import { SessionContainer } from 'supertokens-node/recipe/session';

@Injectable()
export class RoutineMaintanancesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly casl: CaslAbilityFactory,
    private schedulerRegistry: SchedulerRegistry,
  ) {}
  async create(
    session: SessionContainer,
    createRoutineMaintananceInput: routine_maintanancesCreateInput,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'create',
      'RoutineMaintanances',
    );
    const data = await this.prisma.routine_maintanances.create({
      data: createRoutineMaintananceInput,
    });
    try {
      this.schedulerRegistry.addCronJob(
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
      return data;
    } catch {
      await this.prisma.routine_maintanances.delete({
        where: {
          id: data.id,
        },
      });
      throw new BadRequestException('cron is not valid');
    }
  }

  async findAll(
    session: SessionContainer,
    where?: routine_maintanancesWhereInput,
    orderBy?: routine_maintanancesSumOrderByAggregateInput,
    limit?: number,
    offset?: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'RoutineMaintanances');
    return this.prisma.routine_maintanances.findMany({
      where,
      orderBy,
      take: limit,
      skip: offset,
    });
  }
  async count(
    session: SessionContainer,
    where?: routine_maintanancesWhereInput,
    orderBy?: routine_maintanancesSumOrderByAggregateInput,
    limit?: number,
    offset?: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'RoutineMaintanances');
    return this.prisma.routine_maintanances.count({
      where,
      orderBy,
      take: limit,
      skip: offset,
    });
  }

  async findOne(session: SessionContainer, id: number) {
    const canGet = await this.prisma.routine_maintanances.findUnique({
      where: { id },
    });
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('RoutineMaintanances', canGet),
    );
    return canGet;
  }

  async update(
    session: SessionContainer,
    id: number,
    updateRoutineMaintananceInput: routine_maintanancesUpdateInput,
  ) {
    if (updateRoutineMaintananceInput?.cron?.set) {
      const isValidate = cron.isValidCron(
        updateRoutineMaintananceInput.cron.set,
      );
      if (!isValidate) {
        throw new BadRequestException('cron is not valid');
      }
    }
    const canUpdate = await this.prisma.routine_maintanances.findUnique({
      where: { id },
    });

    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'update',
      subject('RoutineMaintanances', canUpdate),
    );
    const data = await this.prisma.routine_maintanances.update({
      where: { id },
      data: updateRoutineMaintananceInput,
    });
    try {
      this.schedulerRegistry.deleteCronJob(`routine_maintanances_${id}`);
      this.schedulerRegistry.addCronJob(
        `routine_maintanances_${id}`,
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
    } catch {
      await this.prisma.routine_maintanances.update({
        where: { id },
        data: canUpdate,
      });
      throw new BadRequestException("Can't update cron");
    }
  }

  async remove(session: SessionContainer, id: number) {
    const canDelete = await this.prisma.routine_maintanances.findUnique({
      where: { id },
    });
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'delete',
      subject('RoutineMaintanances', canDelete),
    );
    const data = await this.prisma.routine_maintanances.delete({
      where: { id },
    });
    try {
      const exists = this.schedulerRegistry.doesExist(
        'cron',
        `routine_maintanances_${id}`,
      );
      if (exists) {
        this.schedulerRegistry.deleteCronJob(`routine_maintanances_${id}`);
      }
    } catch {
      this.prisma.routine_maintanances.create({
        data,
      });
      throw new BadRequestException("Can't delete cron");
    }
    return data;
  }

  async machine(session: SessionContainer, parent_id: bigint) {
    const canGet = await this.prisma.routine_maintanances
      .findUnique({
        where: { id: parent_id },
      })
      .meachine();
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('Machines', canGet),
    );
    return canGet;
  }

  async assignee(session: SessionContainer, parent_id: bigint) {
    const canGet = await this.prisma.routine_maintanances
      .findUnique({
        where: { id: parent_id },
      })
      .assignee();
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('Users', canGet),
    );
    return canGet;
  }
}
