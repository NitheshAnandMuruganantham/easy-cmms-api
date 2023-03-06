import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import {
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common/exceptions';
import Passwordless from 'supertokens-node/recipe/passwordless';
import { accessibleBy } from '@casl/prisma';

import {
  MaintenanceOrderByWithRelationInput,
  MaintenanceWhereInput,
} from 'src/@generated/maintenance';

import {
  TicketOrderByWithRelationInput,
  TicketWhereInput,
} from 'src/@generated/ticket';

import {
  UsersCreateInput,
  UsersOrderByWithRelationInput,
  UsersUpdateInput,
  UsersWhereInput,
} from 'src/@generated/users';
import { CaslAbilityFactory } from 'src/casl/casl.ability';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { subject } from '@casl/ability';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly casl: CaslAbilityFactory,
  ) {}
  async create(session: SessionContainer, createUserInput: UsersCreateInput) {
    const ability = await this.casl.getCurrentUserAbility(session);
    if (ability.cannot('create', 'Users')) {
      new UnauthorizedException("You don't have permission to create user");
    }

    const signUpResult = await Passwordless.signInUp({
      phoneNumber: createUserInput.phone,
    });

    try {
      return this.prisma.users.create({
        data: { ...createUserInput, user_auth_id: signUpResult.user.id },
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
    const ability = await this.casl.getCurrentUserAbility(session);

    if (ability.cannot('read', 'Users')) {
      new UnauthorizedException("You don't have permission to read user");
    }
    return this.prisma.users.findMany({
      where: {
        AND: [
          accessibleBy(ability).Users,
          where,
          {
            user_auth_id: {
              not: session.getUserId(),
            },
          },
        ],
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
    const ability = await this.casl.getCurrentUserAbility(session);

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
    const ability = await this.casl.getCurrentUserAbility(session);

    const userToGet = await this.prisma.users.findUnique({
      where: { id },
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
    const ability = await this.casl.getCurrentUserAbility(session);

    const userToUpdate = await this.prisma.users.findUnique({
      where: { id },
    });

    if (ability.cannot('update', subject('Users', userToUpdate))) {
      new UnauthorizedException("You don't have permission to read user");
    }

    return this.prisma.users.update({
      where: { id },
      data: updateUserInput,
    });
  }

  async remove(session: SessionContainer, id: number) {
    const ability = await this.casl.getCurrentUserAbility(session);

    if (ability.cannot('delete', 'Users')) {
      new UnauthorizedException("You don't have permission to read user");
    }

    return this.prisma.users.delete({
      where: { id },
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
    const ability = await this.casl.getCurrentUserAbility(session);

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
    const ability = await this.casl.getCurrentUserAbility(session);

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
