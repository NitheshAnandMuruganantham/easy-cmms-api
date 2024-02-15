import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { production_dataCreateWithoutUpdatedByInput } from './production-data-create-without-updated-by.input';
import { Type } from 'class-transformer';
import { production_dataCreateOrConnectWithoutUpdatedByInput } from './production-data-create-or-connect-without-updated-by.input';
import { production_dataUpsertWithWhereUniqueWithoutUpdatedByInput } from './production-data-upsert-with-where-unique-without-updated-by.input';
import { production_dataCreateManyUpdatedByInputEnvelope } from './production-data-create-many-updated-by-input-envelope.input';
import { production_dataWhereUniqueInput } from './production-data-where-unique.input';
import { production_dataUpdateWithWhereUniqueWithoutUpdatedByInput } from './production-data-update-with-where-unique-without-updated-by.input';
import { production_dataUpdateManyWithWhereWithoutUpdatedByInput } from './production-data-update-many-with-where-without-updated-by.input';
import { production_dataScalarWhereInput } from './production-data-scalar-where.input';

@InputType()
export class production_dataUncheckedUpdateManyWithoutUpdatedByNestedInput {
  @Field(() => [production_dataCreateWithoutUpdatedByInput], { nullable: true })
  @Type(() => production_dataCreateWithoutUpdatedByInput)
  create?: Array<production_dataCreateWithoutUpdatedByInput>;

  @Field(() => [production_dataCreateOrConnectWithoutUpdatedByInput], {
    nullable: true,
  })
  @Type(() => production_dataCreateOrConnectWithoutUpdatedByInput)
  connectOrCreate?: Array<production_dataCreateOrConnectWithoutUpdatedByInput>;

  @Field(() => [production_dataUpsertWithWhereUniqueWithoutUpdatedByInput], {
    nullable: true,
  })
  @Type(() => production_dataUpsertWithWhereUniqueWithoutUpdatedByInput)
  upsert?: Array<production_dataUpsertWithWhereUniqueWithoutUpdatedByInput>;

  @Field(() => production_dataCreateManyUpdatedByInputEnvelope, {
    nullable: true,
  })
  @Type(() => production_dataCreateManyUpdatedByInputEnvelope)
  createMany?: production_dataCreateManyUpdatedByInputEnvelope;

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

  @Field(() => [production_dataUpdateWithWhereUniqueWithoutUpdatedByInput], {
    nullable: true,
  })
  @Type(() => production_dataUpdateWithWhereUniqueWithoutUpdatedByInput)
  update?: Array<production_dataUpdateWithWhereUniqueWithoutUpdatedByInput>;

  @Field(() => [production_dataUpdateManyWithWhereWithoutUpdatedByInput], {
    nullable: true,
  })
  @Type(() => production_dataUpdateManyWithWhereWithoutUpdatedByInput)
  updateMany?: Array<production_dataUpdateManyWithWhereWithoutUpdatedByInput>;

  @Field(() => [production_dataScalarWhereInput], { nullable: true })
  @Type(() => production_dataScalarWhereInput)
  deleteMany?: Array<production_dataScalarWhereInput>;
}
