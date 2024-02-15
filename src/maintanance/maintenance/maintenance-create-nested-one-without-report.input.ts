import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceCreateWithoutReportInput } from './maintenance-create-without-report.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateOrConnectWithoutReportInput } from './maintenance-create-or-connect-without-report.input';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';

@InputType()
export class MaintenanceCreateNestedOneWithoutReportInput {
  @Field(() => MaintenanceCreateWithoutReportInput, { nullable: true })
  @Type(() => MaintenanceCreateWithoutReportInput)
  create?: MaintenanceCreateWithoutReportInput;

  @Field(() => MaintenanceCreateOrConnectWithoutReportInput, { nullable: true })
  @Type(() => MaintenanceCreateOrConnectWithoutReportInput)
  connectOrCreate?: MaintenanceCreateOrConnectWithoutReportInput;

  @Field(() => MaintenanceWhereUniqueInput, { nullable: true })
  @Type(() => MaintenanceWhereUniqueInput)
  connect?: MaintenanceWhereUniqueInput;
}
