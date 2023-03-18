import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UsersCountOrderByAggregateInput } from './users-count-order-by-aggregate.input';
import { UsersAvgOrderByAggregateInput } from './users-avg-order-by-aggregate.input';
import { UsersMaxOrderByAggregateInput } from './users-max-order-by-aggregate.input';
import { UsersMinOrderByAggregateInput } from './users-min-order-by-aggregate.input';
import { UsersSumOrderByAggregateInput } from './users-sum-order-by-aggregate.input';

@InputType()
export class UsersOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profile?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_auth_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    blockId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    extra_roles?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role_alias?: keyof typeof SortOrder;

    @Field(() => UsersCountOrderByAggregateInput, {nullable:true})
    _count?: UsersCountOrderByAggregateInput;

    @Field(() => UsersAvgOrderByAggregateInput, {nullable:true})
    _avg?: UsersAvgOrderByAggregateInput;

    @Field(() => UsersMaxOrderByAggregateInput, {nullable:true})
    _max?: UsersMaxOrderByAggregateInput;

    @Field(() => UsersMinOrderByAggregateInput, {nullable:true})
    _min?: UsersMinOrderByAggregateInput;

    @Field(() => UsersSumOrderByAggregateInput, {nullable:true})
    _sum?: UsersSumOrderByAggregateInput;
}
