import { registerEnumType } from '@nestjs/graphql';

export enum BlockOrderByRelevanceFieldEnum {
    name = "name",
    location = "location"
}


registerEnumType(BlockOrderByRelevanceFieldEnum, { name: 'BlockOrderByRelevanceFieldEnum', description: undefined })
