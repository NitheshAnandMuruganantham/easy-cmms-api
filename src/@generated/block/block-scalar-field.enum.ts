import { registerEnumType } from '@nestjs/graphql';

export enum BlockScalarFieldEnum {
    id = "id",
    name = "name",
    location = "location",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(BlockScalarFieldEnum, { name: 'BlockScalarFieldEnum', description: undefined })
