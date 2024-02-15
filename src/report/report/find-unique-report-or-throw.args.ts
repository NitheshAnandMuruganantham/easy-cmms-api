import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueReportOrThrowArgs {

    @Field(() => ReportWhereUniqueInput, {nullable:false})
    @Type(() => ReportWhereUniqueInput)
    where!: ReportWhereUniqueInput;
}
