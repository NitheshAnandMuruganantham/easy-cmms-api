import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SectionSumAggregate {

    @Field(() => String, {nullable:true})
    id?: bigint | number;
}
