import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MachinesOrderByRelationAggregateInput } from '../machines/machines-order-by-relation-aggregate.input';
import { UsersOrderByRelationAggregateInput } from '../users/users-order-by-relation-aggregate.input';
import { block_settingsOrderByRelationAggregateInput } from '../block-settings/block-settings-order-by-relation-aggregate.input';
import { BlockOrderByRelevanceInput } from './block-order-by-relevance.input';

@InputType()
export class BlockOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    location?: keyof typeof SortOrder;

    @Field(() => MachinesOrderByRelationAggregateInput, {nullable:true})
    machines?: MachinesOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => UsersOrderByRelationAggregateInput, {nullable:true})
    Users?: UsersOrderByRelationAggregateInput;

    @Field(() => block_settingsOrderByRelationAggregateInput, {nullable:true})
    block_settings?: block_settingsOrderByRelationAggregateInput;

    @Field(() => BlockOrderByRelevanceInput, {nullable:true})
    _relevance?: BlockOrderByRelevanceInput;
}
