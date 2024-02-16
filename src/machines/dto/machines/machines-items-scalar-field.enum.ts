import { registerEnumType } from '@nestjs/graphql';

export enum Machines_itemsScalarFieldEnum {
  id = 'id',
  machine_id = 'machine_id',
  item_id = 'item_id',
  block_id = 'block_id',
}

registerEnumType(Machines_itemsScalarFieldEnum, {
  name: 'Machines_itemsScalarFieldEnum',
  description: undefined,
});
