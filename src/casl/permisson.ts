import { AbilityBuilder } from '@casl/ability';
import { createPrismaAbility } from '@casl/prisma';

const getPermission = (user: any) => {
  const { can, build } = new AbilityBuilder<any>(createPrismaAbility);

  can('read', 'Block', {
    id: {
      equals: user.blockId,
    },
  });

  can('read', 'Items', {
    block_id: {
      equals: user.blockId,
    },
  });
  can('read', 'Section', {
    blockId: { equals: user.blockId },
  });
  can('read', 'machineCatagory', {
    blockId: { equals: user.blockId },
  });
  can('read', 'Machines', {
    block_id: {
      equals: user.blockId,
    },
  });
  can('read', 'ProductionData', {
    blockId: { equals: user.blockId },
  });
  can('read', 'Users', {
    blockId: {
      equals: user.blockId,
    },
  });

  can('read', 'Ticket');
  can('read', 'Maintenance');

  can('create', 'Ticket', {
    user_id: {
      equals: user.id,
    },
  });

  can('create', 'machineCatagory');
  can('delete', 'machineCatagory');

  if (user.role === 'FITTER') {
    can('update', 'Maintenance');
    can('create', 'Maintenance');
  }

  if (user.role === 'MANAGER' || user.role === 'ADMIN') {
    // Users permissions
    can('read', 'Block');
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
    can('create', 'Replacements');
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

    can('create', 'catagory');
    can('read', 'catagory');
    can('update', 'catagory');
    can('delete', 'catagory');

    can('create', 'Items');
    can('read', 'Items');
    can('update', 'Items');
    can('delete', 'Items');
  }

  if (user.extra_roles.includes('PRODUCTION_CONTROLLER')) {
    can('create', 'ProductionData');
    can('read', 'ProductionData');
    can('update', 'ProductionData');
    can('delete', 'ProductionData');
  }

  return build();
};

export default getPermission;
