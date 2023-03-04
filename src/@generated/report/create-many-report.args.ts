import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportCreateManyInput } from './report-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyReportArgs {

    @Field(() => [ReportCreateManyInput], {nullable:false})
    @Type(() => ReportCreateManyInput)
    data!: Array<ReportCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
