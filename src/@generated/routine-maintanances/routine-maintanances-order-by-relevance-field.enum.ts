import { registerEnumType } from '@nestjs/graphql';

export enum routine_maintanancesOrderByRelevanceFieldEnum {
    name = "name",
    description = "description",
    cron = "cron",
    from = "from",
    to = "to"
}


registerEnumType(routine_maintanancesOrderByRelevanceFieldEnum, { name: 'routine_maintanancesOrderByRelevanceFieldEnum', description: undefined })
