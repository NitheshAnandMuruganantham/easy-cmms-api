import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportWhereUniqueInput } from './report-where-unique.input';
import { Type } from 'class-transformer';
import { ReportUpdateWithoutMaintenanceInput } from './report-update-without-maintenance.input';
import { ReportCreateWithoutMaintenanceInput } from './report-create-without-maintenance.input';

@InputType()
export class ReportUpsertWithWhereUniqueWithoutMaintenanceInput {
  @Field(() => ReportWhereUniqueInput, { nullable: false })
  @Type(() => ReportWhereUniqueInput)
  where!: ReportWhereUniqueInput;

  @Field(() => ReportUpdateWithoutMaintenanceInput, { nullable: false })
  @Type(() => ReportUpdateWithoutMaintenanceInput)
  update!: ReportUpdateWithoutMaintenanceInput;

  @Field(() => ReportCreateWithoutMaintenanceInput, { nullable: false })
  @Type(() => ReportCreateWithoutMaintenanceInput)
  create!: ReportCreateWithoutMaintenanceInput;
}
