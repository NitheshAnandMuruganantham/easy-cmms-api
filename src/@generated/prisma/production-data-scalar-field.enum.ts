import { registerEnumType } from '@nestjs/graphql';

export enum Production_dataScalarFieldEnum {
    id = "id",
    total_run_time = "total_run_time",
    total_down_time = "total_down_time",
    target_production = "target_production",
    actual_production = "actual_production",
    from = "from",
    to = "to",
    updated_by = "updated_by",
    created_at = "created_at",
    updated_at = "updated_at",
    blockId = "blockId"
}


registerEnumType(Production_dataScalarFieldEnum, { name: 'Production_dataScalarFieldEnum', description: undefined })
