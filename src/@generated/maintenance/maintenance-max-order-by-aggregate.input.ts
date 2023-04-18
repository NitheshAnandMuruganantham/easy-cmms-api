import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class MaintenanceMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    photo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    to?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    resolved?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    un_planned?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    elapsed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    assignee_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    machine_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @HideField()
    block_id?: keyof typeof SortOrder;
}
