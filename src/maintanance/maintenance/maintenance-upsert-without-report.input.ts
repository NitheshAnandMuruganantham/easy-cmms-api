import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceUpdateWithoutReportInput } from './maintenance-update-without-report.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateWithoutReportInput } from './maintenance-create-without-report.input';

@InputType()
export class MaintenanceUpsertWithoutReportInput {

    @Field(() => MaintenanceUpdateWithoutReportInput, {nullable:false})
    @Type(() => MaintenanceUpdateWithoutReportInput)
    update!: MaintenanceUpdateWithoutReportInput;

    @Field(() => MaintenanceCreateWithoutReportInput, {nullable:false})
    @Type(() => MaintenanceCreateWithoutReportInput)
    create!: MaintenanceCreateWithoutReportInput;
}
