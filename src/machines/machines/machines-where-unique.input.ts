import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';

@InputType()
export class MachinesWhereUniqueInput {

    @Field(() => GraphQLBigInt, {nullable:true})
    id?: bigint | number;
}
