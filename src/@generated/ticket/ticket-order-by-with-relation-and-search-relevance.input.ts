import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { UsersOrderByWithRelationAndSearchRelevanceInput } from '../users/users-order-by-with-relation-and-search-relevance.input';
import { MaintenanceOrderByWithRelationAndSearchRelevanceInput } from '../maintenance/maintenance-order-by-with-relation-and-search-relevance.input';
import { MachinesOrderByWithRelationAndSearchRelevanceInput } from '../machines/machines-order-by-with-relation-and-search-relevance.input';
import { TicketOrderByRelevanceInput } from './ticket-order-by-relevance.input';

@InputType()
export class TicketOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    photos?: keyof typeof SortOrder;

    @HideField()
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maintenance_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    machine_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @HideField()
    user?: UsersOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => MaintenanceOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    maintenance?: MaintenanceOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => MachinesOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    machines?: MachinesOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => TicketOrderByRelevanceInput, {nullable:true})
    _relevance?: TicketOrderByRelevanceInput;
}
