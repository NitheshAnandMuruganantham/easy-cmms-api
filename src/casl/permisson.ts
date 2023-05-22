import { AbilityBuilder } from '@casl/ability';
import { createPrismaAbility } from '@casl/prisma';

const getPermission = (user: any) => {
  const { can, build } = new AbilityBuilder(createPrismaAbility);

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

  can('create', 'machineCatagory', {
    block_id: {
      equals: user.blockId,
    },
  });
  can('delete', 'machineCatagory', {
    block_id: {
      equals: user.blockId,
    },
  });

  if (user.role === 'FITTER') {
    can('update', 'Maintenance', {
      block_id: {
        equals: user.blockId,
      },
    });
    can('create', 'Maintenance', {
      block_id: {
        equals: user.blockId,
      },
    });
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
    can('create', 'ProductionData', {
      block_id: {
        equals: user.blockId,
      },
    });
    can('read', 'ProductionData', {
      block_id: {
        equals: user.blockId,
      },
    });
    can('update', 'ProductionData', {
      block_id: {
        equals: user.blockId,
      },
    });
    can('delete', 'ProductionData', {
      block_id: {
        equals: user.blockId,
      },
    });

    // invoice permissions
    can('create', 'Invoices', {
      block_id: {
        equals: user.blockId,
      },
    });
    can('read', 'Invoices', {
      block_id: {
        equals: user.blockId,
      },
    });
    can('update', 'Invoices', {
      block_id: {
        equals: user.blockId,
      },
    });
    can('delete', 'Invoices', {
      block_id: {
        equals: user.blockId,
      },
    });

    // invoice items permissions
    can('create', 'invoice_items', {
      block_id: {
        equals: user.blockId,
      },
    });
    can('read', 'invoice_items', {
      block_id: {
        equals: user.blockId,
      },
    });
    can('update', 'invoice_items', {
      block_id: {
        equals: user.blockId,
      },
    });
    can('delete', 'invoice_items', {
      block_id: {
        equals: user.blockId,
      },
    });

    // RoutineMaintanances permissions
    can('create', 'RoutineMaintanances', {
      block_id: {
        equals: user.blockId,
      },
    });
    can('read', 'RoutineMaintanances', {
      block_id: {
        equals: user.blockId,
      },
    });
    can('update', 'RoutineMaintanances', {
      block_id: {
        equals: user.blockId,
      },
    });
    can('delete', 'RoutineMaintanances', {
      block_id: {
        equals: user.blockId,
      },
    });

    // Tickets permissions

    can('create', 'Ticket', {
      block_id: {
        equals: user.blockId,
      },
    });
    can('read', 'Ticket', {
      block_id: {
        equals: user.blockId,
      },
    });
    can('update', 'Ticket', {
      block_id: {
        equals: user.blockId,
      },
    });
    can('delete', 'Ticket', {
      block_id: {
        equals: user.blockId,
      },
    });

    //  Section permissions

    can('create', 'Section', { block_id: { equals: user.blockId } });
    can('read', 'Section', { block_id: { equals: user.blockId } });
    can('update', 'Section', { block_id: { equals: user.blockId } });
    can('delete', 'Section', { block_id: { equals: user.blockId } });

    //  Report permissions

    can('create', 'Reports', { block_id: { equals: user.blockId } });
    can('read', 'Reports', { block_id: { equals: user.blockId } });
    can('update', 'Reports', { block_id: { equals: user.blockId } });
    can('delete', 'Reports', { block_id: { equals: user.blockId } });

    //  Report permissions

    can('create', 'Maintenance', { block_id: { equals: user.blockId } });
    can('read', 'Maintenance', { block_id: { equals: user.blockId } });
    can('update', 'Maintenance', { block_id: { equals: user.blockId } });
    can('delete', 'Maintenance', { block_id: { equals: user.blockId } });

    //  Replacements permissions

    can('read', 'Replacements', { block_id: { equals: user.blockId } });
    can('create', 'Replacements', { block_id: { equals: user.blockId } });
    can('update', 'Replacements', { block_id: { equals: user.blockId } });
    can('delete', 'Replacements', { block_id: { equals: user.blockId } });

    can('create', 'Machines', { block_id: { equals: user.blockId } });
    can('update', 'Machines', { block_id: { equals: user.blockId } });
    can('delete', 'Machines', { block_id: { equals: user.blockId } });

    can('create', 'Items', { block_id: { equals: user.blockId } });
    can('update', 'Items', { block_id: { equals: user.blockId } });
    can('delete', 'Items', { block_id: { equals: user.blockId } });

    can('create', 'Block');
    can('update', 'Block');
    can('delete', 'Block');

    can('create', 'catagory', { block_id: { equals: user.blockId } });
    can('read', 'catagory', { block_id: { equals: user.blockId } });
    can('update', 'catagory', { block_id: { equals: user.blockId } });
    can('delete', 'catagory', { block_id: { equals: user.blockId } });

    can('create', 'Items', { block_id: { equals: user.blockId } });
    can('read', 'Items', {
      block_id: {
        equals: user.blockId,
      },
    });
    can('update', 'Items', {
      block_id: {
        equals: user.blockId,
      },
    });
    can('delete', 'Items', {
      block_id: {
        equals: user.blockId,
      },
    });
  }

  if (user.extra_roles.includes('PRODUCTION_CONTROLLER')) {
    can('create', 'ProductionData', {
      block_id: {
        equals: user.blockId,
      },
    });
    can('read', 'ProductionData', {
      block_id: {
        equals: user.blockId,
      },
    });
    can('update', 'ProductionData', {
      block_id: {
        equals: user.blockId,
      },
    });
    can('delete', 'ProductionData', {
      block_id: {
        equals: user.blockId,
      },
    });
  }

  return build();
};

export default getPermission;
