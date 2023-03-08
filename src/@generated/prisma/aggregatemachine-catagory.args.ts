import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machine_catagoryWhereInput } from '../machine-catagory/machine-catagory-where.input';
import { Type } from 'class-transformer';
import { machine_catagoryOrderByWithRelationAndSearchRelevanceInput } from '../machine-catagory/machine-catagory-order-by-with-relation-and-search-relevance.input';
import { machine_catagoryWhereUniqueInput } from '../machine-catagory/machine-catagory-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatemachineCatagoryArgs {

    @Field(() => machine_catagoryWhereInput, {nullable:true})
    @Type(() => machine_catagoryWhereInput)
    where?: machine_catagoryWhereInput;

    @Field(() => [machine_catagoryOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<machine_catagoryOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => machine_catagoryWhereUniqueInput, {nullable:true})
    cursor?: machine_catagoryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
