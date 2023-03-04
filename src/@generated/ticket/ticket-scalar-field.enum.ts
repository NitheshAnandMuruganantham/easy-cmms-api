import { registerEnumType } from '@nestjs/graphql';

export enum TicketScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    photos = "photos",
    user_id = "user_id",
    maintenance_id = "maintenance_id",
    machine_id = "machine_id",
    status = "status",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(TicketScalarFieldEnum, { name: 'TicketScalarFieldEnum', description: undefined })
