import { registerEnumType } from '@nestjs/graphql';

export enum InvoicesOrderByRelevanceFieldEnum {
  number = 'number',
}

registerEnumType(InvoicesOrderByRelevanceFieldEnum, {
  name: 'InvoicesOrderByRelevanceFieldEnum',
  description: undefined,
});
