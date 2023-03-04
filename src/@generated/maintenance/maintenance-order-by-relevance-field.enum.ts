import { registerEnumType } from '@nestjs/graphql';

export enum MaintenanceOrderByRelevanceFieldEnum {
    name = "name",
    photo = "photo",
    description = "description"
}


registerEnumType(MaintenanceOrderByRelevanceFieldEnum, { name: 'MaintenanceOrderByRelevanceFieldEnum', description: undefined })
