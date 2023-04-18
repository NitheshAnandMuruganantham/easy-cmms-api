import { registerEnumType } from '@nestjs/graphql';

export enum ReplacementsScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    quantity = "quantity",
    metadata = "metadata",
    item_id = "item_id",
    maintanance_id = "maintanance_id",
    created_at = "created_at",
    approved = "approved",
    updated_at = "updated_at",
    block_id = "block_id"
}


registerEnumType(ReplacementsScalarFieldEnum, { name: 'ReplacementsScalarFieldEnum', description: undefined })
