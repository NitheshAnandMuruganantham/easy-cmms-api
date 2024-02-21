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
  invoice_items,
  Invoices,
} from '@prisma/client';
import { PureAbility, AbilityBuilder, subject } from '@casl/ability';
import { createPrismaAbility, PrismaQuery, Subjects } from '@casl/prisma';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ForbiddenError } from 'apollo-server-core';
import getPermission from './permisson';

export type subject = Subjects<{
  Users: Users;
  Block: Block;
  Ticket: Ticket;
  Invoices: Invoices;
  invoice_items: invoice_items;
  Maintenance: Maintenance;
  Items: Items;
  catagory: catagory;
  Machines: Machines;
  machineCatagory: machine_catagory;
  Section: Sections;
  Reports: Reports;
  Replacements: Replacements;
  RoutineMaintanances: routine_maintanances;
}>;

export type action = 'create' | 'read' | 'update' | 'delete';

type AppAbility = PureAbility<[action, subject], PrismaQuery>;

@Injectable()
export class CaslAbilityFactory {
  constructor(private readonly prisma: PrismaService) {}
  async getCurrentUserAbility(session) {
    if (!session?.userId) {
      throw new ForbiddenException('You are not a part of our system');
    }
    let user: Users = undefined;

    user = await this.prisma.users.findUnique({
      where: {
        blockId_email: {
          blockId: session.blockId,
          email: session.email,
        },
      },
    });

    if (!user) {
      throw new ForbiddenError('user not exists in the organization');
    }
    return getPermission(user);
  }
}
