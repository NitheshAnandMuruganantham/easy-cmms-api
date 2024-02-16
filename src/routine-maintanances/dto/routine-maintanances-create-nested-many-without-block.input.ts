import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { routine_maintanancesCreateWithoutBlockInput } from './routine-maintanances-create-without-block.input';
import { Type } from 'class-transformer';
import { routine_maintanancesCreateOrConnectWithoutBlockInput } from './routine-maintanances-create-or-connect-without-block.input';
import { routine_maintanancesCreateManyBlockInputEnvelope } from './routine-maintanances-create-many-block-input-envelope.input';
import { routine_maintanancesWhereUniqueInput } from './routine-maintanances-where-unique.input';

@InputType()
export class routine_maintanancesCreateNestedManyWithoutBlockInput {
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

  @Field(() => routine_maintanancesCreateManyBlockInputEnvelope, {
    nullable: true,
  })
  @Type(() => routine_maintanancesCreateManyBlockInputEnvelope)
  createMany?: routine_maintanancesCreateManyBlockInputEnvelope;

  @Field(() => [routine_maintanancesWhereUniqueInput], { nullable: true })
  @Type(() => routine_maintanancesWhereUniqueInput)
  connect?: Array<routine_maintanancesWhereUniqueInput>;
}
