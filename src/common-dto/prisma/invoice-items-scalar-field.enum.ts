import { registerEnumType } from '@nestjs/graphql';

export enum Invoice_itemsScalarFieldEnum {
    id = "id",
    invoice_id = "invoice_id",
    unit_price = "unit_price",
    quantity = "quantity",
    amount = "amount",
    item_id = "item_id",
    block_id = "block_id",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(Invoice_itemsScalarFieldEnum, { name: 'Invoice_itemsScalarFieldEnum', description: undefined })
