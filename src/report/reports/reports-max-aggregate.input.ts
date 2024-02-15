import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ReportsMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    report?: true;

    @Field(() => Boolean, {nullable:true})
    sign?: true;

    @Field(() => Boolean, {nullable:true})
    validated?: true;

    @Field(() => Boolean, {nullable:true})
    validated_sign?: true;

    @Field(() => Boolean, {nullable:true})
    maintance_id?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;

    @HideField()
    block_id?: true;
}
