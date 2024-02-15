import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportCreateInput } from './report-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneReportArgs {

    @Field(() => ReportCreateInput, {nullable:false})
    @Type(() => ReportCreateInput)
    data!: ReportCreateInput;
}
