import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateManyMaintenanceInput } from './report-create-many-maintenance.input';
import { Type } from 'class-transformer';

@InputType()
export class ReportCreateManyMaintenanceInputEnvelope {

    @Field(() => [ReportCreateManyMaintenanceInput], {nullable:false})
    @Type(() => ReportCreateManyMaintenanceInput)
    data!: Array<ReportCreateManyMaintenanceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
