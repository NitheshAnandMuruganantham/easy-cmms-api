import { registerEnumType } from '@nestjs/graphql';

export enum MachinesScalarFieldEnum {
  id = 'id',
  name = 'name',
  section_id = 'section_id',
  block_id = 'block_id',
  label = 'label',
  profile = 'profile',
  priority = 'priority',
  created_at = 'created_at',
  updated_at = 'updated_at',
  machine_catagory_id = 'machine_catagory_id',
}

registerEnumType(MachinesScalarFieldEnum, {
  name: 'MachinesScalarFieldEnum',
  description: undefined,
});
