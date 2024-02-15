import { registerEnumType } from '@nestjs/graphql';

export enum ItemsScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    quantity = "quantity",
    unit_price = "unit_price",
    catagory_id = "catagory_id",
    created_at = "created_at",
    updated_at = "updated_at",
    block_id = "block_id"
}


registerEnumType(ItemsScalarFieldEnum, { name: 'ItemsScalarFieldEnum', description: undefined })
