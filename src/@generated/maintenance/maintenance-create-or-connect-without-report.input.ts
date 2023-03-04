import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateWithoutReportInput } from './maintenance-create-without-report.input';

@InputType()
export class MaintenanceCreateOrConnectWithoutReportInput {

    @Field(() => MaintenanceWhereUniqueInput, {nullable:false})
    @Type(() => MaintenanceWhereUniqueInput)
    where!: MaintenanceWhereUniqueInput;

    @Field(() => MaintenanceCreateWithoutReportInput, {nullable:false})
    @Type(() => MaintenanceCreateWithoutReportInput)
    create!: MaintenanceCreateWithoutReportInput;
}
