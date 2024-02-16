import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceCreateWithoutReportsInput } from './maintenance-create-without-reports.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateOrConnectWithoutReportsInput } from './maintenance-create-or-connect-without-reports.input';
import { MaintenanceUpsertWithoutReportsInput } from './maintenance-upsert-without-reports.input';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';
import { MaintenanceUpdateWithoutReportsInput } from './maintenance-update-without-reports.input';

@InputType()
export class MaintenanceUpdateOneRequiredWithoutReportsNestedInput {
  @Field(() => MaintenanceCreateWithoutReportsInput, { nullable: true })
  @Type(() => MaintenanceCreateWithoutReportsInput)
  create?: MaintenanceCreateWithoutReportsInput;

  @Field(() => MaintenanceCreateOrConnectWithoutReportsInput, {
    nullable: true,
  })
  @Type(() => MaintenanceCreateOrConnectWithoutReportsInput)
  connectOrCreate?: MaintenanceCreateOrConnectWithoutReportsInput;

  @Field(() => MaintenanceUpsertWithoutReportsInput, { nullable: true })
  @Type(() => MaintenanceUpsertWithoutReportsInput)
  upsert?: MaintenanceUpsertWithoutReportsInput;

  @Field(() => MaintenanceWhereUniqueInput, { nullable: true })
  @Type(() => MaintenanceWhereUniqueInput)
  connect?: MaintenanceWhereUniqueInput;

  @Field(() => MaintenanceUpdateWithoutReportsInput, { nullable: true })
  @Type(() => MaintenanceUpdateWithoutReportsInput)
  update?: MaintenanceUpdateWithoutReportsInput;
}
