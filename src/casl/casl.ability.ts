import {
  Maintenance,
  Ticket,
  Users,
  Sections,
  Reports,
  Machines,
  catagory,
  routine_maintanances,
  Replacements,
  Items,
  Block,
  machine_catagory,
  production_data,
} from '@prisma/client';
import { PureAbility, AbilityBuilder, subject } from '@casl/ability';
import { createPrismaAbility, PrismaQuery, Subjects } from '@casl/prisma';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { SessionContainer } from 'supertokens-node/recipe/session';
import { RedisService } from '@liaoliaots/nestjs-redis';
import { Redis } from 'ioredis';
import { ForbiddenError } from 'apollo-server-core';

export type subject = Subjects<{
  Users: Users;
  Block: Block;
  Ticket: Ticket;
  Maintenance: Maintenance;
  Items: Items;
  ItemCatagory: catagory;
  Machines: Machines;
  machineCatagory: machine_catagory;
  Section: Sections;
  Reports: Reports;
  Replacements: Replacements;
  RoutineMaintanances: routine_maintanances;
  ProductionData: production_data;
}>;

export type action = 'create' | 'read' | 'update' | 'delete';

type AppAbility = PureAbility<[action, subject], PrismaQuery>;

@Injectable()
export class CaslAbilityFactory {
  redis: Redis;
  constructor(
    private readonly prisma: PrismaService,
    private readonly redisService: RedisService,
  ) {
    this.redis = this.redisService.getClient();
  }
  async getCurrentUserAbility(session: SessionContainer) {
    if (!session?.getUserId()) {
      throw new ForbiddenException('You are not a part of our system');
    }
    let user: Users = undefined;
    const getCacheUser = await this.redis.get(`user_${session.getUserId()}`);
    if (getCacheUser) {
      user = JSON.parse(getCacheUser);
    } else {
      user = await this.prisma.users.findUnique({
        where: {
          user_auth_id: session.getUserId(),
        },
      });
      await this.redis.set(`user_${user.user_auth_id}`, JSON.stringify(user));
    }
    if (!user) {
      throw new ForbiddenError('user not exists in the organization');
    }
    const { can, build } = new AbilityBuilder<any>(createPrismaAbility);

    // Wildcard permissions for testing
    can('read', 'Ticket');
    can('read', 'Section');
    can('read', 'machineCatagory');
    can('read', 'Block');
    can('read', 'ProductionData');
    can('read', 'Items');
    can('read', 'Machines');
    can('read', 'ItemCatagory');
    can('read', 'Maintenance');
    can('read', 'Users');
    can('read', 'Ticket');
    can('read', 'Maintenance');

    if (user.role === 'SUPERVISOR') {
      // Tickets permissions

      can('create', 'Ticket', {
        user_id: {
          equals: user.id,
        },
      });
    }

    if (user.role === 'FITTER') {
      can('update', 'Maintenance');
      can('create', 'Maintenance');
    }

    if (user.role === 'MANAGER' || user.role === 'ADMIN') {
      // Users permissions
      can('create', 'Users');
      can('read', 'Users');
      can('update', 'Users');
      can('delete', 'Users');

      // production permissions
      can('create', 'ProductionData');
      can('read', 'ProductionData');
      can('update', 'ProductionData');
      can('delete', 'ProductionData');

      // RoutineMaintanances permissions
      can('create', 'RoutineMaintanances');
      can('read', 'RoutineMaintanances');
      can('update', 'RoutineMaintanances');
      can('delete', 'RoutineMaintanances');

      // Tickets permissions

      can('create', 'Ticket');
      can('read', 'Ticket');
      can('update', 'Ticket');
      can('delete', 'Ticket');

      //  Section permissions

      can('create', 'Section');
      can('read', 'Section');
      can('update', 'Section');
      can('delete', 'Section');

      //  Report permissions

      can('create', 'Reports');
      can('read', 'Reports');
      can('update', 'Reports');
      can('delete', 'Reports');

      //  Report permissions

      can('create', 'Maintenance');
      can('read', 'Maintenance');
      can('update', 'Maintenance');
      can('delete', 'Maintenance');

      //  Replacements permissions

      can('read', 'Replacements');
      can('update', 'Replacements');
      can('delete', 'Replacements');

      can('create', 'Machines');
      can('update', 'Machines');
      can('delete', 'Machines');

      can('create', 'Items');
      can('update', 'Items');
      can('delete', 'Items');

      can('create', 'Block');
      can('update', 'Block');
      can('delete', 'Block');

      can('create', 'ItemCatagory');
      can('update', 'ItemCatagory');
      can('delete', 'ItemCatagory');
    }

    if (user.extra_roles.includes('PRODUCTION_CONTROLLER')) {
      can('create', 'ProductionData');
      can('read', 'ProductionData');
      can('update', 'ProductionData');
      can('delete', 'ProductionData');
    }

    return build();
  }
}
