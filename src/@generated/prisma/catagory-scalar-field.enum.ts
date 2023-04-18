import { registerEnumType } from '@nestjs/graphql';

export enum CatagoryScalarFieldEnum {
    id = "id",
    name = "name",
    created_at = "created_at",
    block_id = "block_id",
    updated_at = "updated_at"
}


registerEnumType(CatagoryScalarFieldEnum, { name: 'CatagoryScalarFieldEnum', description: undefined })
