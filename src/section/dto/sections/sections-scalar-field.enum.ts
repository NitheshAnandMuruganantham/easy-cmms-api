import { registerEnumType } from '@nestjs/graphql';

export enum SectionsScalarFieldEnum {
  id = 'id',
  name = 'name',
  block_id = 'block_id',
  created_at = 'created_at',
  updated_at = 'updated_at',
}

registerEnumType(SectionsScalarFieldEnum, {
  name: 'SectionsScalarFieldEnum',
  description: undefined,
});
