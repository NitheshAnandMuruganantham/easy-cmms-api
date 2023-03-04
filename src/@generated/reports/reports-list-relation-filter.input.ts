import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportsWhereInput } from './reports-where.input';

@InputType()
export class ReportsListRelationFilter {

    @Field(() => ReportsWhereInput, {nullable:true})
    every?: ReportsWhereInput;

    @Field(() => ReportsWhereInput, {nullable:true})
    some?: ReportsWhereInput;

    @Field(() => ReportsWhereInput, {nullable:true})
    none?: ReportsWhereInput;
}
