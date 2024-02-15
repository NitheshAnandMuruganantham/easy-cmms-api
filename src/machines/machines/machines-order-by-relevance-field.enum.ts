import { registerEnumType } from '@nestjs/graphql';

export enum MachinesOrderByRelevanceFieldEnum {
  name = 'name',
  label = 'label',
}

registerEnumType(MachinesOrderByRelevanceFieldEnum, {
  name: 'MachinesOrderByRelevanceFieldEnum',
  description: undefined,
});
