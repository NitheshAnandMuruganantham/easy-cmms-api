import { registerEnumType } from '@nestjs/graphql';

export enum ItemsOrderByRelevanceFieldEnum {
  name = 'name',
  code = 'code',
}

registerEnumType(ItemsOrderByRelevanceFieldEnum, {
  name: 'ItemsOrderByRelevanceFieldEnum',
  description: undefined,
});
