import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import {
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common/exceptions';
import { accessibleBy } from '@casl/prisma';

import {
  MaintenanceOrderByWithRelationInput,
  MaintenanceWhereInput,
} from 'src/maintanance/dto';

import {
  TicketOrderByWithRelationInput,
  TicketWhereInput,
} from 'src/ticket/dto';

import {
  UsersCreateInput,
  UsersOrderByWithRelationInput,
  UsersUpdateInput,
  UsersWhereInput,
} from 'src/users/dto';
import { CaslAbilityFactory } from 'src/casl/casl.ability';
import SessionContainer from '../types/session';
import { subject } from '@casl/ability';
import { v4 as uuid } from 'uuid';
import { hashSync } from 'bcryptjs';
@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly casl: CaslAbilityFactory,
  ) {}
  async create(session: SessionContainer, createUserInput: UsersCreateInput) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);
    if (ability.cannot('create', 'Users')) {
      new UnauthorizedException("You don't have permission to create user");
    }

    try {
      return this.prisma.users.create({
        data: {
          ...createUserInput,
          user_auth_id: '',
          password: hashSync(uuid(), 10),
          blockId: session.User.blockId,
        } as any,
      });
    } catch (error) {
      new BadRequestException(
        "Can't create user account or user account may already exists",
      );
    }
  }

  async findAll(
    session: SessionContainer,
    where: UsersWhereInput,
    orderBy: UsersOrderByWithRelationInput,
    limit: number,
    offset: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);

    if (ability.cannot('read', 'Users')) {
      new UnauthorizedException("You don't have permission to read user");
    }
    return this.prisma.users.findMany({
      where: {
        AND: [
          accessibleBy(ability).Users,
          where,
          {
            OR: [
              {
                id: {
                  not: session.User.id,
                },
              },
            ],
          },
        ],
      },
      include: {
        block: true,
      },
      orderBy,
      take: limit,
      skip: offset,
    });
  }

  async count(
    session: SessionContainer,
    where: UsersWhereInput,
    orderBy: UsersOrderByWithRelationInput,
    limit: number,
    offset: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);

    if (ability.cannot('read', 'Users')) {
      new UnauthorizedException("You don't have permission to read user");
    }
    return this.prisma.users.count({
      where: {
        AND: [accessibleBy(ability).Users, where],
      },
      orderBy,
      take: limit,
      skip: offset,
    });
  }

  async findOne(session: SessionContainer, id: number) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);

    const userToGet = await this.prisma.users.findUnique({
      where: { id },
      include: {
        block: true,
      },
    });

    if (ability.cannot('read', subject('Users', userToGet))) {
      new UnauthorizedException("You don't have permission to read user");
    }

    return userToGet;
  }

  async update(
    session: SessionContainer,
    id: number,
    updateUserInput: UsersUpdateInput,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);

    const userToUpdate = await this.prisma.users.findUnique({
      where: { id },
      include: {
        block: true,
      },
    });

    if (ability.cannot('update', subject('Users', userToUpdate))) {
      new UnauthorizedException("You don't have permission to read user");
    }

    return this.prisma.users.update({
      where: { id },
      // @ts-ignore
      data: updateUserInput,
      include: {
        block: true,
      },
    });
  }

  async remove(session: SessionContainer, id: number) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);

    if (ability.cannot('delete', 'Users')) {
      new UnauthorizedException("You don't have permission to read user");
    }

    return this.prisma.users.delete({
      where: { id },
      include: {
        block: true,
      },
    });
  }

  async maintenance(
    session: SessionContainer,
    parentId: bigint,
    where: MaintenanceWhereInput,
    orderBy: MaintenanceOrderByWithRelationInput,
    limit: number,
    offset: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);

    if (ability.cannot('read', 'Maintenance')) {
      new UnauthorizedException("You don't have permission to read user");
    }

    return this.prisma.users
      .findUnique({
        where: { id: parentId },
      })
      .maintenance({
        where: {
          AND: [accessibleBy(ability).Maintenance, where],
        },
        orderBy,
        take: limit,
        skip: offset,
      });
  }

  async ticket(
    session: SessionContainer,
    parentId: bigint,
    where: TicketWhereInput,
    orderBy: TicketOrderByWithRelationInput,
    limit: number,
    offset: number,
  ) {
    const ability = await this.casl.getCurrentUserAbility(session.Session);

    if (ability.cannot('read', 'Ticket')) {
      new UnauthorizedException("You don't have permission to read user");
    }
    return this.prisma.users
      .findUnique({
        where: { id: parentId },
      })
      .ticket({
        where: {
          AND: [accessibleBy(ability).Ticket, where],
        },
        orderBy,
        take: limit,
        skip: offset,
      });
  }
}
