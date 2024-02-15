import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ReportMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: bigint | number;

    @Field(() => String, {nullable:true})
    sign?: string;

    @Field(() => String, {nullable:true})
    validated?: bigint | number;

    @Field(() => String, {nullable:true})
    validated_sign?: bigint | number;

    @Field(() => String, {nullable:true})
    maintance_id?: bigint | number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
