import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { Type } from 'class-transformer';
import { ReportCreateWithoutMaintenanceInput } from './report-create-without-maintenance.input';

@InputType()
export class ReportCreateOrConnectWithoutMaintenanceInput {
  @Field(() => ReportWhereUniqueInput, { nullable: false })
  @Type(() => ReportWhereUniqueInput)
  where!: ReportWhereUniqueInput;

  @Field(() => ReportCreateWithoutMaintenanceInput, { nullable: false })
  @Type(() => ReportCreateWithoutMaintenanceInput)
  create!: ReportCreateWithoutMaintenanceInput;
}
