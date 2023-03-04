import { ForbiddenError, subject } from '@casl/ability';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import {
  MaintenanceCreateInput,
  MaintenanceOrderByWithRelationInput,
  MaintenanceUpdateInput,
  MaintenanceWhereInput,
} from 'src/@generated/maintenance';
import { CaslAbilityFactory } from 'src/casl/casl.ability';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { accessibleBy } from '@casl/prisma';
import { S3Service } from 'src/s3/s3.service';

@Injectable()
export class MaintananceService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly s3Service: S3Service,
    private readonly casl: CaslAbilityFactory,
  ) {}

  async create(
    session: SessionContainer,
    createMaintananceInput: MaintenanceCreateInput,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan('create', 'Maintenance');

    const data = await this.prisma.maintenance.create({
      data: createMaintananceInput,
    });
    if (createMaintananceInput?.ticket?.connect?.id) {
      await this.prisma.ticket
        .update({
          where: {
            id: createMaintananceInput.ticket.connect.id,
          },
          data: {
            status: 'CLOSED',
          },
        })
        .catch(() => {
          this.prisma.maintenance.delete({
            where: {
              id: data.id,
            },
          });
          throw new InternalServerErrorException(
            'can not create new maintanance',
          );
        });
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
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'Maintenance');

    const data = await this.prisma.maintenance.findMany({
      where: {
        AND: [accessibleBy(ability).Maintenance, where],
      },
      orderBy,
      take: limit,
      skip: offset,
    });

    const result = data.map((ticket) => {
      return {
        ...ticket,
        photo: this.s3Service.getSignedUrl(ticket.photo),
      };
    });
    console.log(result);
    return data;
  }

  async count(
    session: SessionContainer,
    where: MaintenanceWhereInput,
    orderBy: MaintenanceOrderByWithRelationInput,
    limit: number,
    offset: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session);
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
      where: { id },
    });
    const ability = await this.casl.getCurrentUserAbility(session);
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
    updateMaintananceInput: MaintenanceUpdateInput,
  ) {
    const toUpdate = await this.prisma.maintenance.findUnique({
      where: { id },
    });
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'update',
      subject('Maintenance', toUpdate),
    );
    return this.prisma.maintenance.update({
      where: { id },
      data: updateMaintananceInput,
    });
  }

  async remove(session: SessionContainer, id: number) {
    const toRemove = await this.prisma.maintenance.findUnique({
      where: { id },
    });
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'delete',
      subject('Maintenance', toRemove),
    );
    return this.prisma.maintenance.delete({
      where: { id },
    });
  }

  async assignee(session: SessionContainer, id: bigint) {
    const canRead = await this.prisma.users.findUnique({
      where: { id },
    });
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('Users', canRead),
    );
    return canRead;
  }

  async machine(session: SessionContainer, id: bigint) {
    const canRead = await this.prisma.machines.findUnique({
      where: { id },
    });
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan(
      'read',
      subject('Machines', canRead),
    );
    return canRead;
  }

  async replacements(session: SessionContainer, id: bigint) {
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'Replacements');
    return this.prisma.maintenance
      .findUnique({
        where: { id },
      })
      .replacements({
        where: accessibleBy(await this.casl.getCurrentUserAbility(session))
          .Replacements,
      });
  }

  async reports(session: SessionContainer, id: bigint) {
    const ability = await this.casl.getCurrentUserAbility(session);
    ForbiddenError.from(ability).throwUnlessCan('read', 'Reports');
    return this.prisma.maintenance
      .findUnique({
        where: { id },
      })
      .reports({
        where: accessibleBy(await this.casl.getCurrentUserAbility(session))
          .Reports,
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
    const ability = await this.casl.getCurrentUserAbility(session);
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
}
