import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { production_dataWhereInput } from '../production-data/production-data-where.input';

@InputType()
export class Production_dataListRelationFilter {

    @Field(() => production_dataWhereInput, {nullable:true})
    every?: production_dataWhereInput;

    @Field(() => production_dataWhereInput, {nullable:true})
    some?: production_dataWhereInput;

    @Field(() => production_dataWhereInput, {nullable:true})
    none?: production_dataWhereInput;
}
