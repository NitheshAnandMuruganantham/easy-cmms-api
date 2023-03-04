import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';

@ObjectType()
export class CatagorySumAggregate {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;
}
