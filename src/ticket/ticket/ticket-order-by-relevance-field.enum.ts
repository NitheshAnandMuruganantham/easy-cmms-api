import { registerEnumType } from '@nestjs/graphql';

export enum TicketOrderByRelevanceFieldEnum {
    name = "name",
    description = "description",
    photos = "photos"
}


registerEnumType(TicketOrderByRelevanceFieldEnum, { name: 'TicketOrderByRelevanceFieldEnum', description: undefined })
