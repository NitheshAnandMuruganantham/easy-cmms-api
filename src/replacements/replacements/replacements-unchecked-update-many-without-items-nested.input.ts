import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplacementsCreateWithoutItemsInput } from './replacements-create-without-items.input';
import { Type } from 'class-transformer';
import { ReplacementsCreateOrConnectWithoutItemsInput } from './replacements-create-or-connect-without-items.input';
import { ReplacementsUpsertWithWhereUniqueWithoutItemsInput } from './replacements-upsert-with-where-unique-without-items.input';
import { ReplacementsCreateManyItemsInputEnvelope } from './replacements-create-many-items-input-envelope.input';
import { ReplacementsWhereUniqueInput } from './replacements-where-unique.input';
import { ReplacementsUpdateWithWhereUniqueWithoutItemsInput } from './replacements-update-with-where-unique-without-items.input';
import { ReplacementsUpdateManyWithWhereWithoutItemsInput } from './replacements-update-many-with-where-without-items.input';
import { ReplacementsScalarWhereInput } from './replacements-scalar-where.input';

@InputType()
export class ReplacementsUncheckedUpdateManyWithoutItemsNestedInput {
  @Field(() => [ReplacementsCreateWithoutItemsInput], { nullable: true })
  @Type(() => ReplacementsCreateWithoutItemsInput)
  create?: Array<ReplacementsCreateWithoutItemsInput>;

  @Field(() => [ReplacementsCreateOrConnectWithoutItemsInput], {
    nullable: true,
  })
  @Type(() => ReplacementsCreateOrConnectWithoutItemsInput)
  connectOrCreate?: Array<ReplacementsCreateOrConnectWithoutItemsInput>;

  @Field(() => [ReplacementsUpsertWithWhereUniqueWithoutItemsInput], {
    nullable: true,
  })
  @Type(() => ReplacementsUpsertWithWhereUniqueWithoutItemsInput)
  upsert?: Array<ReplacementsUpsertWithWhereUniqueWithoutItemsInput>;

  @Field(() => ReplacementsCreateManyItemsInputEnvelope, { nullable: true })
  @Type(() => ReplacementsCreateManyItemsInputEnvelope)
  createMany?: ReplacementsCreateManyItemsInputEnvelope;

  @Field(() => [ReplacementsWhereUniqueInput], { nullable: true })
  @Type(() => ReplacementsWhereUniqueInput)
  set?: Array<ReplacementsWhereUniqueInput>;

  @Field(() => [ReplacementsWhereUniqueInput], { nullable: true })
  @Type(() => ReplacementsWhereUniqueInput)
  disconnect?: Array<ReplacementsWhereUniqueInput>;

  @Field(() => [ReplacementsWhereUniqueInput], { nullable: true })
  @Type(() => ReplacementsWhereUniqueInput)
  delete?: Array<ReplacementsWhereUniqueInput>;

  @Field(() => [ReplacementsWhereUniqueInput], { nullable: true })
  @Type(() => ReplacementsWhereUniqueInput)
  connect?: Array<ReplacementsWhereUniqueInput>;

  @Field(() => [ReplacementsUpdateWithWhereUniqueWithoutItemsInput], {
    nullable: true,
  })
  @Type(() => ReplacementsUpdateWithWhereUniqueWithoutItemsInput)
  update?: Array<ReplacementsUpdateWithWhereUniqueWithoutItemsInput>;

  @Field(() => [ReplacementsUpdateManyWithWhereWithoutItemsInput], {
    nullable: true,
  })
  @Type(() => ReplacementsUpdateManyWithWhereWithoutItemsInput)
  updateMany?: Array<ReplacementsUpdateManyWithWhereWithoutItemsInput>;

  @Field(() => [ReplacementsScalarWhereInput], { nullable: true })
  @Type(() => ReplacementsScalarWhereInput)
  deleteMany?: Array<ReplacementsScalarWhereInput>;
}
