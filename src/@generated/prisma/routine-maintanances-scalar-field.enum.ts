import { registerEnumType } from '@nestjs/graphql';

export enum Routine_maintanancesScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    cron = "cron",
    from = "from",
    to = "to",
    assignee_id = "assignee_id",
    meachine_id = "meachine_id",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(Routine_maintanancesScalarFieldEnum, { name: 'Routine_maintanancesScalarFieldEnum', description: undefined })
