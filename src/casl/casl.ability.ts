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
import getPermission from './permisson';

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
    return getPermission(user);
  }
}
