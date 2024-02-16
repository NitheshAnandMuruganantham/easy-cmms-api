import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { routine_maintanancesCreateWithoutAssigneeInput } from './routine-maintanances-create-without-assignee.input';
import { Type } from 'class-transformer';
import { routine_maintanancesCreateOrConnectWithoutAssigneeInput } from './routine-maintanances-create-or-connect-without-assignee.input';
import { routine_maintanancesUpsertWithWhereUniqueWithoutAssigneeInput } from './routine-maintanances-upsert-with-where-unique-without-assignee.input';
import { routine_maintanancesCreateManyAssigneeInputEnvelope } from './routine-maintanances-create-many-assignee-input-envelope.input';
import { routine_maintanancesWhereUniqueInput } from './routine-maintanances-where-unique.input';
import { routine_maintanancesUpdateWithWhereUniqueWithoutAssigneeInput } from './routine-maintanances-update-with-where-unique-without-assignee.input';
import { routine_maintanancesUpdateManyWithWhereWithoutAssigneeInput } from './routine-maintanances-update-many-with-where-without-assignee.input';
import { routine_maintanancesScalarWhereInput } from './routine-maintanances-scalar-where.input';

@InputType()
export class routine_maintanancesUpdateManyWithoutAssigneeNestedInput {
  @Field(() => [routine_maintanancesCreateWithoutAssigneeInput], {
    nullable: true,
  })
  @Type(() => routine_maintanancesCreateWithoutAssigneeInput)
  create?: Array<routine_maintanancesCreateWithoutAssigneeInput>;

  @Field(() => [routine_maintanancesCreateOrConnectWithoutAssigneeInput], {
    nullable: true,
  })
  @Type(() => routine_maintanancesCreateOrConnectWithoutAssigneeInput)
  connectOrCreate?: Array<routine_maintanancesCreateOrConnectWithoutAssigneeInput>;

  @Field(
    () => [routine_maintanancesUpsertWithWhereUniqueWithoutAssigneeInput],
    { nullable: true },
  )
  @Type(() => routine_maintanancesUpsertWithWhereUniqueWithoutAssigneeInput)
  upsert?: Array<routine_maintanancesUpsertWithWhereUniqueWithoutAssigneeInput>;

  @Field(() => routine_maintanancesCreateManyAssigneeInputEnvelope, {
    nullable: true,
  })
  @Type(() => routine_maintanancesCreateManyAssigneeInputEnvelope)
  createMany?: routine_maintanancesCreateManyAssigneeInputEnvelope;

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

  @Field(
    () => [routine_maintanancesUpdateWithWhereUniqueWithoutAssigneeInput],
    { nullable: true },
  )
  @Type(() => routine_maintanancesUpdateWithWhereUniqueWithoutAssigneeInput)
  update?: Array<routine_maintanancesUpdateWithWhereUniqueWithoutAssigneeInput>;

  @Field(() => [routine_maintanancesUpdateManyWithWhereWithoutAssigneeInput], {
    nullable: true,
  })
  @Type(() => routine_maintanancesUpdateManyWithWhereWithoutAssigneeInput)
  updateMany?: Array<routine_maintanancesUpdateManyWithWhereWithoutAssigneeInput>;

  @Field(() => [routine_maintanancesScalarWhereInput], { nullable: true })
  @Type(() => routine_maintanancesScalarWhereInput)
  deleteMany?: Array<routine_maintanancesScalarWhereInput>;
}
