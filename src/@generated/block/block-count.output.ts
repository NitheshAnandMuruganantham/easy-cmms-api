import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BlockCount {

    @Field(() => Int, {nullable:false})
    machines?: number;
}
