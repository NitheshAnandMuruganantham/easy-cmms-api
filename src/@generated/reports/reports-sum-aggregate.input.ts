import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ReportsSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    validated?: true;

    @Field(() => Boolean, {nullable:true})
    validated_sign?: true;

    @Field(() => Boolean, {nullable:true})
    maintance_id?: true;

    @HideField()
    block_id?: true;
}
