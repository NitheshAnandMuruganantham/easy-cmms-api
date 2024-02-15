import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportWhereInput } from './report-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyReportArgs {

    @Field(() => ReportWhereInput, {nullable:true})
    @Type(() => ReportWhereInput)
    where?: ReportWhereInput;
}
