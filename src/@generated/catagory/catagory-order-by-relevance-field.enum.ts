import { registerEnumType } from '@nestjs/graphql';

export enum catagoryOrderByRelevanceFieldEnum {
    name = "name"
}


registerEnumType(catagoryOrderByRelevanceFieldEnum, { name: 'catagoryOrderByRelevanceFieldEnum', description: undefined })
