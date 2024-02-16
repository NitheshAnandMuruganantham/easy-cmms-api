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
} from 'src/routine-maintanances/dto';
import { CaslAbilityFactory } from 'src/casl/casl.ability';
import SessionContainer from '../types/session';
import { TwilioService } from 'nestjs-twilio';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RoutineMaintanancesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly casl: CaslAbilityFactory,
    private schedulerRegistry: SchedulerRegistry,
    private readonly config: ConfigService,
    private readonly twilio: TwilioService,
  ) {}
  async create(
    session: SessionContainer,
    createRoutineMaintananceInput: routine_maintanancesCreateInput,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan(
      'create',
      'RoutineMaintanances',
    );
    const data = await this.prisma.routine_maintanances.create({
      // @ts-ignore
      data: {
        ...createRoutineMaintananceInput,
        block: {
          connect: {
            id: session.User.blockId,
          },
        },
      },
    });
    try {
      const j = new CronJob(data.cron, async () => {
        const from = new Date();
        from.setHours(from.getHours() + 1);
        const to = new Date(from);
        to.setHours(to.getHours() + data.duration);
        const result: any = await this.prisma.maintenance.create({
          data: {
            block_id: session.User.blockId,
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
      this.schedulerRegistry.addCronJob(`routine_maintenances_${data.id}`, j);
      j.start();
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
    const ability = await this.casl.getCurrentUserAbility(session.Session);
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
    const ability = await this.casl.getCurrentUserAbility(session.Session);
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
      include: {
        meachine: {
          include: {
            machine_catagory: true,
            block: true,
            section: true,
          },
        },
      },
    });
    const ability = await this.casl.getCurrentUserAbility(session.Session);
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

    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan(
      'update',
      subject('RoutineMaintanances', canUpdate),
    );
    const data = await this.prisma.routine_maintanances.update({
      where: { id },
      // @ts-ignore
      data: updateRoutineMaintananceInput,
    });
    try {
      const cronExists = this.schedulerRegistry.doesExist(
        'cron',
        `routine_maintenances_${data.id}`,
      );
      if (cronExists) {
        this.schedulerRegistry.deleteCronJob(`routine_maintenances_${data.id}`);
      }

      const j = new CronJob(data.cron, async () => {
        const from = new Date();
        from.setHours(from.getHours() + 1);
        const to = new Date(from);
        to.setHours(to.getMinutes() + data.duration);
        const result = await this.prisma.maintenance.create({
          data: {
            block_id: session.User.blockId,
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
      this.schedulerRegistry.addCronJob(
        `routine_maintenances_${data.id}${data.id}`,
        j,
      );
      j.start();
      return data;
    } catch (e) {
      await this.prisma.routine_maintanances.update({
        where: { id },
        data: canUpdate,
      });
      console.log(e);
      throw new BadRequestException("Can't update cron");
    }
  }

  async remove(session: SessionContainer, id: number) {
    const canDelete = await this.prisma.routine_maintanances.findUnique({
      where: { id },
    });
    const ability = await this.casl.getCurrentUserAbility(session.Session);
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
    const canGet = await this.prisma.machines.findMany({
      where: {
        routine_maintanances: {
          every: {
            id: parent_id,
          },
        },
      },
      include: {
        machine_catagory: true,
        block: true,
        section: true,
      },
    });

    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('Machines', canGet as any),
    );
    return canGet;
  }

  async assignee(session: SessionContainer, parent_id: bigint) {
    const canGet = await this.prisma.routine_maintanances
      .findUnique({
        where: { id: parent_id },
      })
      .assignee();
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('Users', canGet),
    );
    return canGet;
  }
}
