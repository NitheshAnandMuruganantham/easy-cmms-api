import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { production_dataCreateWithoutBlockInput } from './production-data-create-without-block.input';
import { Type } from 'class-transformer';
import { production_dataCreateOrConnectWithoutBlockInput } from './production-data-create-or-connect-without-block.input';
import { production_dataUpsertWithWhereUniqueWithoutBlockInput } from './production-data-upsert-with-where-unique-without-block.input';
import { production_dataCreateManyBlockInputEnvelope } from './production-data-create-many-block-input-envelope.input';
import { production_dataWhereUniqueInput } from './production-data-where-unique.input';
import { production_dataUpdateWithWhereUniqueWithoutBlockInput } from './production-data-update-with-where-unique-without-block.input';
import { production_dataUpdateManyWithWhereWithoutBlockInput } from './production-data-update-many-with-where-without-block.input';
import { production_dataScalarWhereInput } from './production-data-scalar-where.input';

@InputType()
export class production_dataUncheckedUpdateManyWithoutBlockNestedInput {
  @Field(() => [production_dataCreateWithoutBlockInput], { nullable: true })
  @Type(() => production_dataCreateWithoutBlockInput)
  create?: Array<production_dataCreateWithoutBlockInput>;

  @Field(() => [production_dataCreateOrConnectWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => production_dataCreateOrConnectWithoutBlockInput)
  connectOrCreate?: Array<production_dataCreateOrConnectWithoutBlockInput>;

  @Field(() => [production_dataUpsertWithWhereUniqueWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => production_dataUpsertWithWhereUniqueWithoutBlockInput)
  upsert?: Array<production_dataUpsertWithWhereUniqueWithoutBlockInput>;

  @Field(() => production_dataCreateManyBlockInputEnvelope, { nullable: true })
  @Type(() => production_dataCreateManyBlockInputEnvelope)
  createMany?: production_dataCreateManyBlockInputEnvelope;

  @Field(() => [production_dataWhereUniqueInput], { nullable: true })
  @Type(() => production_dataWhereUniqueInput)
  set?: Array<production_dataWhereUniqueInput>;

  @Field(() => [production_dataWhereUniqueInput], { nullable: true })
  @Type(() => production_dataWhereUniqueInput)
  disconnect?: Array<production_dataWhereUniqueInput>;

  @Field(() => [production_dataWhereUniqueInput], { nullable: true })
  @Type(() => production_dataWhereUniqueInput)
  delete?: Array<production_dataWhereUniqueInput>;

  @Field(() => [production_dataWhereUniqueInput], { nullable: true })
  @Type(() => production_dataWhereUniqueInput)
  connect?: Array<production_dataWhereUniqueInput>;

  @Field(() => [production_dataUpdateWithWhereUniqueWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => production_dataUpdateWithWhereUniqueWithoutBlockInput)
  update?: Array<production_dataUpdateWithWhereUniqueWithoutBlockInput>;

  @Field(() => [production_dataUpdateManyWithWhereWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => production_dataUpdateManyWithWhereWithoutBlockInput)
  updateMany?: Array<production_dataUpdateManyWithWhereWithoutBlockInput>;

  @Field(() => [production_dataScalarWhereInput], { nullable: true })
  @Type(() => production_dataScalarWhereInput)
  deleteMany?: Array<production_dataScalarWhereInput>;
}
