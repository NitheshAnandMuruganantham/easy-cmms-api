import { registerEnumType } from '@nestjs/graphql';

export enum SectionScalarFieldEnum {
    id = "id",
    name = "name",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(SectionScalarFieldEnum, { name: 'SectionScalarFieldEnum', description: undefined })
