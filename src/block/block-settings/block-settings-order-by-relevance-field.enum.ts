import { registerEnumType } from '@nestjs/graphql';

export enum block_settingsOrderByRelevanceFieldEnum {
    name = "name"
}


registerEnumType(block_settingsOrderByRelevanceFieldEnum, { name: 'block_settingsOrderByRelevanceFieldEnum', description: undefined })
