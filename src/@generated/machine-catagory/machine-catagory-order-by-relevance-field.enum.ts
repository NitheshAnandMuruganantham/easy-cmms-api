import { registerEnumType } from '@nestjs/graphql';

export enum machine_catagoryOrderByRelevanceFieldEnum {
    name = "name"
}


registerEnumType(machine_catagoryOrderByRelevanceFieldEnum, { name: 'machine_catagoryOrderByRelevanceFieldEnum', description: undefined })
