import { registerEnumType } from '@nestjs/graphql';

export enum SectionsOrderByRelevanceFieldEnum {
  name = 'name',
}

registerEnumType(SectionsOrderByRelevanceFieldEnum, {
  name: 'SectionsOrderByRelevanceFieldEnum',
  description: undefined,
});
