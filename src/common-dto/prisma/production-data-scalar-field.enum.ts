import { registerEnumType } from '@nestjs/graphql';

export enum Production_dataScalarFieldEnum {
    id = "id",
    production = "production",
    shift = "shift",
    date = "date",
    updated_by = "updated_by",
    created_at = "created_at",
    updated_at = "updated_at",
    blockId = "blockId"
}


registerEnumType(Production_dataScalarFieldEnum, { name: 'Production_dataScalarFieldEnum', description: undefined })
