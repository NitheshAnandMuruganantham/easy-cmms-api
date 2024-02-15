import { registerEnumType } from '@nestjs/graphql';

export enum Machine_catagoryScalarFieldEnum {
  id = 'id',
  name = 'name',
  block_id = 'block_id',
  created_at = 'created_at',
  updated_at = 'updated_at',
}

registerEnumType(Machine_catagoryScalarFieldEnum, {
  name: 'Machine_catagoryScalarFieldEnum',
  description: undefined,
});
