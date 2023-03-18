import { registerEnumType } from '@nestjs/graphql';

export enum Production_dataScalarFieldEnum {
    id = "id",
    data = "data",
    from = "from",
    to = "to",
    created_at = "created_at",
    updated_at = "updated_at",
    updated_by = "updated_by"
}


registerEnumType(Production_dataScalarFieldEnum, { name: 'Production_dataScalarFieldEnum', description: undefined })
