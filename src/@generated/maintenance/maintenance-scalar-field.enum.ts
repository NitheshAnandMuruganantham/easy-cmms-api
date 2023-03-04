import { registerEnumType } from '@nestjs/graphql';

export enum MaintenanceScalarFieldEnum {
    id = "id",
    name = "name",
    photo = "photo",
    description = "description",
    from = "from",
    to = "to",
    resolved = "resolved",
    metadata = "metadata",
    un_planned = "un_planned",
    elapsed = "elapsed",
    assignee_id = "assignee_id",
    machine_id = "machine_id",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(MaintenanceScalarFieldEnum, { name: 'MaintenanceScalarFieldEnum', description: undefined })
