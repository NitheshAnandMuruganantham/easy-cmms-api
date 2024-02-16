import { registerEnumType } from '@nestjs/graphql';

export enum BlockOrderByRelevanceFieldEnum {
  name = 'name',
  location = 'location',
  Mailings = 'Mailings',
}

registerEnumType(BlockOrderByRelevanceFieldEnum, {
  name: 'BlockOrderByRelevanceFieldEnum',
  description: undefined,
});
