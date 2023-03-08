import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class MachinesSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    section_id?: true;

    @Field(() => Boolean, {nullable:true})
    block_id?: true;

    @Field(() => Boolean, {nullable:true})
    priority?: true;

    @Field(() => Boolean, {nullable:true})
    machine_catagory_id?: true;
}
