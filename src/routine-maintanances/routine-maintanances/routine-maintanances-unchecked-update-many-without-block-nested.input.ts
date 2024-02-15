import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { routine_maintanancesCreateWithoutBlockInput } from './routine-maintanances-create-without-block.input';
import { Type } from 'class-transformer';
import { routine_maintanancesCreateOrConnectWithoutBlockInput } from './routine-maintanances-create-or-connect-without-block.input';
import { routine_maintanancesUpsertWithWhereUniqueWithoutBlockInput } from './routine-maintanances-upsert-with-where-unique-without-block.input';
import { routine_maintanancesCreateManyBlockInputEnvelope } from './routine-maintanances-create-many-block-input-envelope.input';
import { routine_maintanancesWhereUniqueInput } from './routine-maintanances-where-unique.input';
import { routine_maintanancesUpdateWithWhereUniqueWithoutBlockInput } from './routine-maintanances-update-with-where-unique-without-block.input';
import { routine_maintanancesUpdateManyWithWhereWithoutBlockInput } from './routine-maintanances-update-many-with-where-without-block.input';
import { routine_maintanancesScalarWhereInput } from './routine-maintanances-scalar-where.input';

@InputType()
export class routine_maintanancesUncheckedUpdateManyWithoutBlockNestedInput {
  @Field(() => [routine_maintanancesCreateWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => routine_maintanancesCreateWithoutBlockInput)
  create?: Array<routine_maintanancesCreateWithoutBlockInput>;

  @Field(() => [routine_maintanancesCreateOrConnectWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => routine_maintanancesCreateOrConnectWithoutBlockInput)
  connectOrCreate?: Array<routine_maintanancesCreateOrConnectWithoutBlockInput>;

  @Field(() => [routine_maintanancesUpsertWithWhereUniqueWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => routine_maintanancesUpsertWithWhereUniqueWithoutBlockInput)
  upsert?: Array<routine_maintanancesUpsertWithWhereUniqueWithoutBlockInput>;

  @Field(() => routine_maintanancesCreateManyBlockInputEnvelope, {
    nullable: true,
  })
  @Type(() => routine_maintanancesCreateManyBlockInputEnvelope)
  createMany?: routine_maintanancesCreateManyBlockInputEnvelope;

  @Field(() => [routine_maintanancesWhereUniqueInput], { nullable: true })
  @Type(() => routine_maintanancesWhereUniqueInput)
  set?: Array<routine_maintanancesWhereUniqueInput>;

  @Field(() => [routine_maintanancesWhereUniqueInput], { nullable: true })
  @Type(() => routine_maintanancesWhereUniqueInput)
  disconnect?: Array<routine_maintanancesWhereUniqueInput>;

  @Field(() => [routine_maintanancesWhereUniqueInput], { nullable: true })
  @Type(() => routine_maintanancesWhereUniqueInput)
  delete?: Array<routine_maintanancesWhereUniqueInput>;

  @Field(() => [routine_maintanancesWhereUniqueInput], { nullable: true })
  @Type(() => routine_maintanancesWhereUniqueInput)
  connect?: Array<routine_maintanancesWhereUniqueInput>;

  @Field(() => [routine_maintanancesUpdateWithWhereUniqueWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => routine_maintanancesUpdateWithWhereUniqueWithoutBlockInput)
  update?: Array<routine_maintanancesUpdateWithWhereUniqueWithoutBlockInput>;

  @Field(() => [routine_maintanancesUpdateManyWithWhereWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => routine_maintanancesUpdateManyWithWhereWithoutBlockInput)
  updateMany?: Array<routine_maintanancesUpdateManyWithWhereWithoutBlockInput>;

  @Field(() => [routine_maintanancesScalarWhereInput], { nullable: true })
  @Type(() => routine_maintanancesScalarWhereInput)
  deleteMany?: Array<routine_maintanancesScalarWhereInput>;
}
