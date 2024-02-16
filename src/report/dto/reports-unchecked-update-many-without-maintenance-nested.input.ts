import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportsCreateWithoutMaintenanceInput } from './reports-create-without-maintenance.input';
import { Type } from 'class-transformer';
import { ReportsCreateOrConnectWithoutMaintenanceInput } from './reports-create-or-connect-without-maintenance.input';
import { ReportsUpsertWithWhereUniqueWithoutMaintenanceInput } from './reports-upsert-with-where-unique-without-maintenance.input';
import { ReportsCreateManyMaintenanceInputEnvelope } from './reports-create-many-maintenance-input-envelope.input';
import { ReportsWhereUniqueInput } from './reports-where-unique.input';
import { ReportsUpdateWithWhereUniqueWithoutMaintenanceInput } from './reports-update-with-where-unique-without-maintenance.input';
import { ReportsUpdateManyWithWhereWithoutMaintenanceInput } from './reports-update-many-with-where-without-maintenance.input';
import { ReportsScalarWhereInput } from './reports-scalar-where.input';

@InputType()
export class ReportsUncheckedUpdateManyWithoutMaintenanceNestedInput {
  @Field(() => [ReportsCreateWithoutMaintenanceInput], { nullable: true })
  @Type(() => ReportsCreateWithoutMaintenanceInput)
  create?: Array<ReportsCreateWithoutMaintenanceInput>;

  @Field(() => [ReportsCreateOrConnectWithoutMaintenanceInput], {
    nullable: true,
  })
  @Type(() => ReportsCreateOrConnectWithoutMaintenanceInput)
  connectOrCreate?: Array<ReportsCreateOrConnectWithoutMaintenanceInput>;

  @Field(() => [ReportsUpsertWithWhereUniqueWithoutMaintenanceInput], {
    nullable: true,
  })
  @Type(() => ReportsUpsertWithWhereUniqueWithoutMaintenanceInput)
  upsert?: Array<ReportsUpsertWithWhereUniqueWithoutMaintenanceInput>;

  @Field(() => ReportsCreateManyMaintenanceInputEnvelope, { nullable: true })
  @Type(() => ReportsCreateManyMaintenanceInputEnvelope)
  createMany?: ReportsCreateManyMaintenanceInputEnvelope;

  @Field(() => [ReportsWhereUniqueInput], { nullable: true })
  @Type(() => ReportsWhereUniqueInput)
  set?: Array<ReportsWhereUniqueInput>;

  @Field(() => [ReportsWhereUniqueInput], { nullable: true })
  @Type(() => ReportsWhereUniqueInput)
  disconnect?: Array<ReportsWhereUniqueInput>;

  @Field(() => [ReportsWhereUniqueInput], { nullable: true })
  @Type(() => ReportsWhereUniqueInput)
  delete?: Array<ReportsWhereUniqueInput>;

  @Field(() => [ReportsWhereUniqueInput], { nullable: true })
  @Type(() => ReportsWhereUniqueInput)
  connect?: Array<ReportsWhereUniqueInput>;

  @Field(() => [ReportsUpdateWithWhereUniqueWithoutMaintenanceInput], {
    nullable: true,
  })
  @Type(() => ReportsUpdateWithWhereUniqueWithoutMaintenanceInput)
  update?: Array<ReportsUpdateWithWhereUniqueWithoutMaintenanceInput>;

  @Field(() => [ReportsUpdateManyWithWhereWithoutMaintenanceInput], {
    nullable: true,
  })
  @Type(() => ReportsUpdateManyWithWhereWithoutMaintenanceInput)
  updateMany?: Array<ReportsUpdateManyWithWhereWithoutMaintenanceInput>;

  @Field(() => [ReportsScalarWhereInput], { nullable: true })
  @Type(() => ReportsScalarWhereInput)
  deleteMany?: Array<ReportsScalarWhereInput>;
}
