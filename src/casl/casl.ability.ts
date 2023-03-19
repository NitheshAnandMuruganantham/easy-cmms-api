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
      await this.redis.expire(`user_${user.user_auth_id}`, 60);
    }
    if (!user) {
      throw new ForbiddenError('user not exists in the organization');
    }
    const { can, build } = new AbilityBuilder<AppAbility>(createPrismaAbility);

    if (user.role === 'SUPERVISOR') {
      can('create', 'Ticket', {
        AND: [
          {
            user_id: {
              equals: user.id,
            },
          },
          {
            machines: {
              block: {
                id: {
                  equals: user.blockId,
                },
              },
            },
          },
        ],
      });
    }

    if (user.role === 'FITTER') {
      can('update', 'Maintenance', {
        AND: [
          {
            assignee_id: {
              equals: user.id,
            },
          },
          {
            machines: {
              block: {
                id: {
                  equals: user.blockId,
                },
              },
            },
          },
        ],
      });
      can('read', 'Maintenance', {
        AND: [
          {
            assignee_id: {
              equals: user.id,
            },
          },
          {
            machines: {
              block: {
                id: {
                  equals: user.blockId,
                },
              },
            },
          },
        ],
      });
    }

    if (user.role === 'MANAGER') {
      can('create', 'Machines', {
        block: {
          id: {
            equals: user.blockId,
          },
        },
      });
      can('read', 'Machines', {
        block: {
          id: {
            equals: user.blockId,
          },
        },
      });
      can('update', 'Machines', {
        block: {
          id: {
            equals: user.blockId,
          },
        },
      });
      can('delete', 'Machines', {
        block: {
          id: {
            equals: user.blockId,
          },
        },
      });
      can('create', 'Maintenance', {
        AND: [
          {
            assignee: {
              blockId: {
                equals: user.blockId,
              },
            },
          },
          {
            machines: {
              block: {
                id: {
                  equals: user.blockId,
                },
              },
            },
          },
        ],
      });
      can('read', 'Maintenance', {
        AND: [
          {
            machines: {
              block: {
                id: {
                  equals: user.blockId,
                },
              },
            },
          },
        ],
      });
      can('update', 'Maintenance', {
        AND: [
          {
            machines: {
              block: {
                id: {
                  equals: user.blockId,
                },
              },
            },
          },
        ],
      });
      can('delete', 'Maintenance', {
        AND: [
          {
            machines: {
              block: {
                id: {
                  equals: user.blockId,
                },
              },
            },
          },
        ],
      });

      // Users machineCatagory
      can('create', 'machineCatagory', {
        block_id: {
          equals: user.blockId,
        },
      });
      can('read', 'machineCatagory', {
        block_id: {
          equals: user.blockId,
        },
      });
      can('update', 'machineCatagory', {
        block_id: {
          equals: user.blockId,
        },
      });
      can('delete', 'machineCatagory', {
        block_id: {
          equals: user.blockId,
        },
      });

      // Users permissions
      can('create', 'Users', {
        blockId: {
          equals: user.blockId,
        },
      });
      can('read', 'Users', {
        blockId: {
          equals: user.blockId,
        },
      });
      can('update', 'Users', {
        blockId: {
          equals: user.blockId,
        },
      });
      can('delete', 'Users', {
        blockId: {
          equals: user.blockId,
        },
      });

      // RoutineMaintanances permissions
      can('create', 'RoutineMaintanances', {
        AND: [
          {
            machines: {
              block: {
                id: {
                  equals: user.blockId,
                },
              },
            },
          },
          {
            assignee: {
              blockId: {
                equals: user.blockId,
              },
            },
          },
        ],
      });
      can('read', 'RoutineMaintanances', {
        AND: [
          {
            machines: {
              block: {
                id: {
                  equals: user.blockId,
                },
              },
            },
          },
          {
            assignee: {
              blockId: {
                equals: user.blockId,
              },
            },
          },
        ],
      });
      can('update', 'RoutineMaintanances', {
        AND: [
          {
            machines: {
              block: {
                id: {
                  equals: user.blockId,
                },
              },
            },
          },
          {
            assignee: {
              blockId: {
                equals: user.blockId,
              },
            },
          },
        ],
      });
      can('delete', 'RoutineMaintanances', {
        AND: [
          {
            machines: {
              block: {
                id: {
                  equals: user.blockId,
                },
              },
            },
          },
          {
            assignee: {
              blockId: {
                equals: user.blockId,
              },
            },
          },
        ],
      });

      // Tickets permissions

      can('read', 'Ticket', {
        AND: [
          {
            machines: {
              block: {
                id: {
                  equals: user.blockId,
                },
              },
            },
          },
        ],
      });
      can('update', 'Ticket', {
        AND: [
          {
            machines: {
              block: {
                id: {
                  equals: user.blockId,
                },
              },
            },
          },
        ],
      });
      can('delete', 'Ticket', {
        AND: [
          {
            machines: {
              block: {
                id: {
                  equals: user.blockId,
                },
              },
            },
          },
        ],
      });

      //  Section permissions

      can('create', 'Section', {
        AND: [
          {
            block: {
              id: {
                equals: user.blockId,
              },
            },
          },
        ],
      });
      can('read', 'Section', {
        AND: [
          {
            block: {
              id: {
                equals: user.blockId,
              },
            },
          },
        ],
      });
      can('update', 'Section', {
        AND: [
          {
            block: {
              id: {
                equals: user.blockId,
              },
            },
          },
        ],
      });
      can('delete', 'Section', {
        AND: [
          {
            block: {
              id: {
                equals: user.blockId,
              },
            },
          },
        ],
      });
      can('read', 'Block');
    }

    if (user.role === 'ADMIN') {
      // Users machineCatagory
      can('create', 'machineCatagory');
      can('read', 'machineCatagory');
      can('update', 'machineCatagory');
      can('delete', 'machineCatagory');

      // Users permissions
      can('create', 'Users');
      can('read', 'Users');
      can('update', 'Users');
      can('delete', 'Users');

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

      //  Block permissions

      can('create', 'Block');
      can('read', 'Block');
      can('update', 'Block');
      can('delete', 'Block');

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

      //  Replacements permissions
      can('create', 'Machines');
      can('read', 'Machines');
      can('update', 'Machines');
      can('delete', 'Machines');

      can('create', 'Items');
      can('read', 'Items');
      can('update', 'Items');
      can('delete', 'Items');

      can('read', 'ItemCatagory');
      can('create', 'ItemCatagory');
      can('update', 'ItemCatagory');
      can('delete', 'ItemCatagory');
    }

    return build();
  }
}
