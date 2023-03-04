import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportWhereInput } from './report-where.input';

@InputType()
export class ReportListRelationFilter {

    @Field(() => ReportWhereInput, {nullable:true})
    every?: ReportWhereInput;

    @Field(() => ReportWhereInput, {nullable:true})
    some?: ReportWhereInput;

    @Field(() => ReportWhereInput, {nullable:true})
    none?: ReportWhereInput;
}
