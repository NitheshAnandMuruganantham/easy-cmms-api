import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportCreateWithoutMaintenanceInput } from './report-create-without-maintenance.input';
import { Type } from 'class-transformer';
import { ReportCreateOrConnectWithoutMaintenanceInput } from './report-create-or-connect-without-maintenance.input';
import { ReportCreateManyMaintenanceInputEnvelope } from './report-create-many-maintenance-input-envelope.input';
import { ReportWhereUniqueInput } from './report-where-unique.input';

@InputType()
export class ReportUncheckedCreateNestedManyWithoutMaintenanceInput {
  @Field(() => [ReportCreateWithoutMaintenanceInput], { nullable: true })
  @Type(() => ReportCreateWithoutMaintenanceInput)
  create?: Array<ReportCreateWithoutMaintenanceInput>;

  @Field(() => [ReportCreateOrConnectWithoutMaintenanceInput], {
    nullable: true,
  })
  @Type(() => ReportCreateOrConnectWithoutMaintenanceInput)
  connectOrCreate?: Array<ReportCreateOrConnectWithoutMaintenanceInput>;

  @Field(() => ReportCreateManyMaintenanceInputEnvelope, { nullable: true })
  @Type(() => ReportCreateManyMaintenanceInputEnvelope)
  createMany?: ReportCreateManyMaintenanceInputEnvelope;

  @Field(() => [ReportWhereUniqueInput], { nullable: true })
  @Type(() => ReportWhereUniqueInput)
  connect?: Array<ReportWhereUniqueInput>;
}
