import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportsCreateWithoutBlockInput } from './reports-create-without-block.input';
import { Type } from 'class-transformer';
import { ReportsCreateOrConnectWithoutBlockInput } from './reports-create-or-connect-without-block.input';
import { ReportsUpsertWithWhereUniqueWithoutBlockInput } from './reports-upsert-with-where-unique-without-block.input';
import { ReportsCreateManyBlockInputEnvelope } from './reports-create-many-block-input-envelope.input';
import { ReportsWhereUniqueInput } from './reports-where-unique.input';
import { ReportsUpdateWithWhereUniqueWithoutBlockInput } from './reports-update-with-where-unique-without-block.input';
import { ReportsUpdateManyWithWhereWithoutBlockInput } from './reports-update-many-with-where-without-block.input';
import { ReportsScalarWhereInput } from './reports-scalar-where.input';

@InputType()
export class ReportsUncheckedUpdateManyWithoutBlockNestedInput {
  @Field(() => [ReportsCreateWithoutBlockInput], { nullable: true })
  @Type(() => ReportsCreateWithoutBlockInput)
  create?: Array<ReportsCreateWithoutBlockInput>;

  @Field(() => [ReportsCreateOrConnectWithoutBlockInput], { nullable: true })
  @Type(() => ReportsCreateOrConnectWithoutBlockInput)
  connectOrCreate?: Array<ReportsCreateOrConnectWithoutBlockInput>;

  @Field(() => [ReportsUpsertWithWhereUniqueWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => ReportsUpsertWithWhereUniqueWithoutBlockInput)
  upsert?: Array<ReportsUpsertWithWhereUniqueWithoutBlockInput>;

  @Field(() => ReportsCreateManyBlockInputEnvelope, { nullable: true })
  @Type(() => ReportsCreateManyBlockInputEnvelope)
  createMany?: ReportsCreateManyBlockInputEnvelope;

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

  @Field(() => [ReportsUpdateWithWhereUniqueWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => ReportsUpdateWithWhereUniqueWithoutBlockInput)
  update?: Array<ReportsUpdateWithWhereUniqueWithoutBlockInput>;

  @Field(() => [ReportsUpdateManyWithWhereWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => ReportsUpdateManyWithWhereWithoutBlockInput)
  updateMany?: Array<ReportsUpdateManyWithWhereWithoutBlockInput>;

  @Field(() => [ReportsScalarWhereInput], { nullable: true })
  @Type(() => ReportsScalarWhereInput)
  deleteMany?: Array<ReportsScalarWhereInput>;
}
