import { ForbiddenError, subject } from '@casl/ability';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  MaintenanceCreateInput,
  MaintenanceOrderByWithRelationInput,
  MaintenanceUpdateInput,
  MaintenanceWhereInput,
} from 'src/maintanance/dto';
import { CaslAbilityFactory } from 'src/casl/casl.ability';
import SessionContainer from '../types/session';
import { accessibleBy } from '@casl/prisma';
import { S3Service } from 'src/s3/s3.service';
import { TwilioService } from 'nestjs-twilio';
import { ConfigService } from '@nestjs/config';
import { v4 as uuid } from 'uuid';

@Injectable()
export class MaintenanceService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly s3Service: S3Service,
    private readonly casl: CaslAbilityFactory,
    private readonly twilio: TwilioService,
    private readonly config: ConfigService,
  ) {}

  async create(
    session: SessionContainer,
    createMaintenanceInput: MaintenanceCreateInput,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan('create', 'Maintenance');

    const data: any = await this.prisma.maintenance.create({
      data: {
        ...createMaintenanceInput,
        block: {
          connect: {
            id: session.User.blockId,
          },
        },
      } as any,
      include: {
        assignee: true,
        machines: {
          include: {
            section: true,
            machine_catagory: true,
            block: true,
          },
        },
        ticket: {
          include: {
            user: true,
          },
        },
      },
    });

    this.twilio.client.messages.create({
      to: data.assignee.phone,
      from: this.config.get('TWILIO_FROM'),
      body:
        `New maintenance request\n` +
        `Name: ${data.name}\n` +
        `Closed by: ${session.User.name}\n` +
        `Description: ${data.description}\n` +
        `Machine : ${data.machines.label}\n` +
        `Category: ${data.machines.machine_catagory.name}\n` +
        `Block: ${data.machines.block.name}\n` +
        `Section: ${data.machines.section.name}\n` +
        `from : ${data.from.toLocaleString()}\n` +
        `to : ${data.to.toLocaleString()}\n`,
    });
    if (createMaintenanceInput?.ticket?.connect?.id) {
      await this.prisma.ticket
        .update({
          where: {
            id: createMaintenanceInput.ticket.connect.id,
          },
          data: {
            status: 'CLOSED',
          },
        })
        .then(() => {
          this.twilio.client.messages
            .create({
              to: data.assignee.phone,
              from: this.config.get('TWILIO_FROM'),
              body:
                `New maintenance request from ${data.ticket.user.name}\n` +
                `Name : ${session.User.name}\n` +
                `Description: ${data.ticket.description}\n` +
                `Machine : ${data.machines.label}\n` +
                `Category: ${data.machines.machine_catagory.name}\n` +
                `Block: ${data.machines.block.name}\n` +
                `Section: ${data.machines.section.name}\n` +
                `manager note: ${data.description}\n` +
                `from : ${data.from.toLocaleString()}\n` +
                `to : ${data.to.toLocaleString()}\n`,
            })
            .catch(() => null);
        })
        .catch(() => {
          this.prisma.maintenance.delete({
            where: {
              id: data.id,
            },
          });
          throw new InternalServerErrorException(
            'can not create new maintenance',
          );
        });
      await this.twilio.client.messages
        .create({
          to: data.ticket.user.phone,
          from: this.config.get('TWILIO_FROM'),
          body:
            `Your maintenance request #${data.ticket.id} has been closed\n` +
            `assignee : ${data.assignee.name}\n` +
            `closed by : ${session.User.name}\n` +
            `Name: ${data.name}\n` +
            `Description: ${data.description}\n` +
            `Machine : ${data.machines.label}\n` +
            `Category: ${data.machines.machine_catagory.name}\n` +
            `Block: ${data.machines.block.name}\n` +
            `Section: ${data.machines.section.name}\n` +
            `from : ${data.from.toLocaleString()}\n` +
            `to : ${data.to.toLocaleString()}\n` +
            `Thanks for using our service`,
        })
        .catch(() => null);
    }
    return data;
  }

  async findAll(
    session: SessionContainer,
    where: MaintenanceWhereInput,
    orderBy: MaintenanceOrderByWithRelationInput,
    limit: number,
    offset: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'Maintenance');

    const data = await this.prisma.maintenance.findMany({
      where: {
        AND: [where],
      },
      orderBy,
      take: limit,
      skip: offset,
      include: {
        assignee: true,
        machines: {
          include: {
            section: true,
            machine_catagory: true,
            block: true,
          },
        },
        ticket: {
          include: {
            user: true,
          },
        },
      },
    });

    const result = data.map((ticket) => {
      return {
        ...ticket,
        photo: this.s3Service.getSignedUrl(ticket.photo),
      };
    });
    return data;
  }

  async count(
    session: SessionContainer,
    where: MaintenanceWhereInput,
    orderBy: MaintenanceOrderByWithRelationInput,
    limit: number,
    offset: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'Maintenance');

    return this.prisma.maintenance.count({
      where: {
        AND: [accessibleBy(ability).Maintenance, where],
      },
      orderBy,
      take: limit,
      skip: offset,
    });
  }

  async findOne(session: SessionContainer, id: number) {
    const toGet = await this.prisma.maintenance.findUnique({
      where: {
        id,
      },
      include: {
        assignee: true,
        machines: {
          include: {
            section: true,
            machine_catagory: true,
            block: true,
          },
        },
        ticket: {
          include: {
            user: true,
          },
        },
      },
    });
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('Maintenance', toGet),
    );
    return {
      ...toGet,
      photo: this.s3Service.getSignedUrl(toGet.photo),
    };
  }

  async update(
    session: SessionContainer,
    id: number,
    updateMaintenanceInput: MaintenanceUpdateInput,
  ) {
    const toUpdate = await this.prisma.maintenance.findUnique({
      where: { id },
    });
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan(
      'update',
      subject('Maintenance', toUpdate),
    );

    if (updateMaintenanceInput?.photo?.set) {
      updateMaintenanceInput.photo.set = await this.s3Service.uploadBase64Image(
        updateMaintenanceInput.photo.set,
        uuid(),
      );
    }

    if (updateMaintenanceInput?.resolved) {
      await this.prisma.maintenance.update({
        where: {
          id,
        },
        data: {
          elapsed: {
            set: new Date(),
          },
        },
      });
      await this.prisma.replacements.deleteMany({
        where: {
          approved: false,
          maintanance_id: id,
        },
      });
    }

    const updated = await this.prisma.maintenance.update({
      where: { id },
      data: updateMaintenanceInput as any,
    });
    return updated;
  }

  async remove(session: SessionContainer, id: number) {
    const toRemove = await this.prisma.maintenance.findUnique({
      where: { id },
    });
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan(
      'delete',
      subject('Maintenance', toRemove),
    );
    const isDeleted = await this.prisma.maintenance.delete({
      where: { id },
    });

    await this.prisma.ticket
      .update({
        where: {
          maintenance_id: id,
        },
        data: {
          status: 'OPEN',
        },
      })
      .catch(() => null);
    return isDeleted;
  }

  async assignee(session: SessionContainer, id: bigint) {
    const canRead = await this.prisma.users.findUnique({
      where: { id },
    });

    return canRead;
  }

  async machine(session: SessionContainer, id: bigint) {
    const canRead = await this.prisma.machines.findUnique({
      where: { id },
      include: {
        machine_catagory: true,
        block: true,
        section: true,
      },
    });
    const ability = await this.casl.getCurrentUserAbility(session.Session);

    return canRead;
  }

  async replacements(session: SessionContainer, id: bigint) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'Replacements');
    return this.prisma.maintenance
      .findUnique({
        where: { id },
      })
      .replacements({
        where: accessibleBy(ability).Replacements,
      });
  }

  async reports(session: SessionContainer, id: bigint) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'Reports');
    return this.prisma.maintenance
      .findUnique({
        where: { id },
      })
      .reports({
        where: accessibleBy(ability).Reports,
      });
  }

  async ticket(session: SessionContainer, id: bigint) {
    const canGet = await this.prisma.maintenance
      .findUnique({
        where: { id },
      })
      .ticket();
    if (!canGet) {
      return null;
    }
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('Ticket', canGet),
    );
    return canGet;
  }

  async assigned(session: SessionContainer, id: bigint) {
    const canGet = await this.prisma.maintenance
      .findUnique({
        where: { id },
      })
      .assignee();
    if (!canGet) {
      return null;
    }
    if (canGet) {
      return true;
    } else {
      return false;
    }
  }
  async dropdown(session: SessionContainer) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'Maintenance');
    const data = await this.prisma.maintenance.findMany({
      where: accessibleBy(ability).Maintenance,
      select: {
        id: true,
        name: true,
      },
    });
    return data.map((item) => ({ label: item.name, value: item.id }));
  }
}
