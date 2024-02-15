import { registerEnumType } from '@nestjs/graphql';

export enum ReplacementsOrderByRelevanceFieldEnum {
    name = "name",
    description = "description"
}


registerEnumType(ReplacementsOrderByRelevanceFieldEnum, { name: 'ReplacementsOrderByRelevanceFieldEnum', description: undefined })
