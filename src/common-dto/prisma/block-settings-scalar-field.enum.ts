import { registerEnumType } from '@nestjs/graphql';

export enum Block_settingsScalarFieldEnum {
  id = 'id',
  block_id = 'block_id',
  name = 'name',
  value = 'value',
  created_at = 'created_at',
  updated_at = 'updated_at',
}

registerEnumType(Block_settingsScalarFieldEnum, {
  name: 'Block_settingsScalarFieldEnum',
  description: undefined,
});
