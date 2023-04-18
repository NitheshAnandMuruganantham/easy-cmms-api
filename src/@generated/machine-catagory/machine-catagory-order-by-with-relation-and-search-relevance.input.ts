import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { MachinesOrderByRelationAggregateInput } from '../machines/machines-order-by-relation-aggregate.input';
import { BlockOrderByWithRelationAndSearchRelevanceInput } from '../block/block-order-by-with-relation-and-search-relevance.input';
import { machine_catagoryOrderByRelevanceInput } from './machine-catagory-order-by-relevance.input';

@InputType()
export class machine_catagoryOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @HideField()
    block_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => MachinesOrderByRelationAggregateInput, {nullable:true})
    machines?: MachinesOrderByRelationAggregateInput;

    @HideField()
    block?: BlockOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => machine_catagoryOrderByRelevanceInput, {nullable:true})
    _relevance?: machine_catagoryOrderByRelevanceInput;
}
