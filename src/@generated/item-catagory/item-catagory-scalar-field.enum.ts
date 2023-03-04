import { registerEnumType } from '@nestjs/graphql';

export enum ItemCatagoryScalarFieldEnum {
    id = "id",
    name = "name",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(ItemCatagoryScalarFieldEnum, { name: 'ItemCatagoryScalarFieldEnum', description: undefined })
