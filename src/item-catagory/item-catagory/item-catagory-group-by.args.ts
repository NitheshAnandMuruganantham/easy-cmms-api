import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCatagoryWhereInput } from './item-catagory-where.input';
import { Type } from 'class-transformer';
import { ItemCatagoryOrderByWithAggregationInput } from './item-catagory-order-by-with-aggregation.input';
import { ItemCatagoryScalarFieldEnum } from './item-catagory-scalar-field.enum';
import { ItemCatagoryScalarWhereWithAggregatesInput } from './item-catagory-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ItemCatagoryCountAggregateInput } from './item-catagory-count-aggregate.input';
import { ItemCatagoryAvgAggregateInput } from './item-catagory-avg-aggregate.input';
import { ItemCatagorySumAggregateInput } from './item-catagory-sum-aggregate.input';
import { ItemCatagoryMinAggregateInput } from './item-catagory-min-aggregate.input';
import { ItemCatagoryMaxAggregateInput } from './item-catagory-max-aggregate.input';

@ArgsType()
export class ItemCatagoryGroupByArgs {

    @Field(() => ItemCatagoryWhereInput, {nullable:true})
    @Type(() => ItemCatagoryWhereInput)
    where?: ItemCatagoryWhereInput;

    @Field(() => [ItemCatagoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ItemCatagoryOrderByWithAggregationInput>;

    @Field(() => [ItemCatagoryScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ItemCatagoryScalarFieldEnum>;

    @Field(() => ItemCatagoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: ItemCatagoryScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ItemCatagoryCountAggregateInput, {nullable:true})
    _count?: ItemCatagoryCountAggregateInput;

    @Field(() => ItemCatagoryAvgAggregateInput, {nullable:true})
    _avg?: ItemCatagoryAvgAggregateInput;

    @Field(() => ItemCatagorySumAggregateInput, {nullable:true})
    _sum?: ItemCatagorySumAggregateInput;

    @Field(() => ItemCatagoryMinAggregateInput, {nullable:true})
    _min?: ItemCatagoryMinAggregateInput;

    @Field(() => ItemCatagoryMaxAggregateInput, {nullable:true})
    _max?: ItemCatagoryMaxAggregateInput;
}
