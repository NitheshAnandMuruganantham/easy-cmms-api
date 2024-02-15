import { registerEnumType } from '@nestjs/graphql';

export enum production_dataOrderByRelevanceFieldEnum {
  shift = 'shift',
}

registerEnumType(production_dataOrderByRelevanceFieldEnum, {
  name: 'production_dataOrderByRelevanceFieldEnum',
  description: undefined,
});
