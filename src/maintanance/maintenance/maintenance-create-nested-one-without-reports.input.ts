import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceCreateWithoutReportsInput } from './maintenance-create-without-reports.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateOrConnectWithoutReportsInput } from './maintenance-create-or-connect-without-reports.input';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';

@InputType()
export class MaintenanceCreateNestedOneWithoutReportsInput {
  @Field(() => MaintenanceCreateWithoutReportsInput, { nullable: true })
  @Type(() => MaintenanceCreateWithoutReportsInput)
  create?: MaintenanceCreateWithoutReportsInput;

  @Field(() => MaintenanceCreateOrConnectWithoutReportsInput, {
    nullable: true,
  })
  @Type(() => MaintenanceCreateOrConnectWithoutReportsInput)
  connectOrCreate?: MaintenanceCreateOrConnectWithoutReportsInput;

  @Field(() => MaintenanceWhereUniqueInput, { nullable: true })
  @Type(() => MaintenanceWhereUniqueInput)
  connect?: MaintenanceWhereUniqueInput;
}
