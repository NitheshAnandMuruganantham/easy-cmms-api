import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';

@InputType()
export class ItemsUpdatemachines_idInput {

    @Field(() => [GraphQLBigInt], {nullable:true})
    set?: Array<bigint> | Array<number>;

    @Field(() => [GraphQLBigInt], {nullable:true})
    push?: Array<bigint> | Array<number>;
}
