import { registerEnumType } from '@nestjs/graphql';

export enum Machine_catagoryScalarFieldEnum {
    id = "id",
    name = "name",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(Machine_catagoryScalarFieldEnum, { name: 'Machine_catagoryScalarFieldEnum', description: undefined })
