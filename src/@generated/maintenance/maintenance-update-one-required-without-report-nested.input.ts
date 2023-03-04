import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceCreateWithoutReportInput } from './maintenance-create-without-report.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateOrConnectWithoutReportInput } from './maintenance-create-or-connect-without-report.input';
import { MaintenanceUpsertWithoutReportInput } from './maintenance-upsert-without-report.input';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';
import { MaintenanceUpdateWithoutReportInput } from './maintenance-update-without-report.input';

@InputType()
export class MaintenanceUpdateOneRequiredWithoutReportNestedInput {

    @Field(() => MaintenanceCreateWithoutReportInput, {nullable:true})
    @Type(() => MaintenanceCreateWithoutReportInput)
    create?: MaintenanceCreateWithoutReportInput;

    @Field(() => MaintenanceCreateOrConnectWithoutReportInput, {nullable:true})
    @Type(() => MaintenanceCreateOrConnectWithoutReportInput)
    connectOrCreate?: MaintenanceCreateOrConnectWithoutReportInput;

    @Field(() => MaintenanceUpsertWithoutReportInput, {nullable:true})
    @Type(() => MaintenanceUpsertWithoutReportInput)
    upsert?: MaintenanceUpsertWithoutReportInput;

    @Field(() => MaintenanceWhereUniqueInput, {nullable:true})
    @Type(() => MaintenanceWhereUniqueInput)
    connect?: MaintenanceWhereUniqueInput;

    @Field(() => MaintenanceUpdateWithoutReportInput, {nullable:true})
    @Type(() => MaintenanceUpdateWithoutReportInput)
    update?: MaintenanceUpdateWithoutReportInput;
}
