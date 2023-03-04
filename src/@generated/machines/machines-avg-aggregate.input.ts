import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MachinesAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    section_id?: true;

    @Field(() => Boolean, {nullable:true})
    block_id?: true;

    @Field(() => Boolean, {nullable:true})
    priority?: true;
}
