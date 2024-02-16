import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplacementsCreateWithoutBlockInput } from './replacements-create-without-block.input';
import { Type } from 'class-transformer';
import { ReplacementsCreateOrConnectWithoutBlockInput } from './replacements-create-or-connect-without-block.input';
import { ReplacementsCreateManyBlockInputEnvelope } from './replacements-create-many-block-input-envelope.input';
import { ReplacementsWhereUniqueInput } from './replacements-where-unique.input';

@InputType()
export class ReplacementsUncheckedCreateNestedManyWithoutBlockInput {
  @Field(() => [ReplacementsCreateWithoutBlockInput], { nullable: true })
  @Type(() => ReplacementsCreateWithoutBlockInput)
  create?: Array<ReplacementsCreateWithoutBlockInput>;

  @Field(() => [ReplacementsCreateOrConnectWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => ReplacementsCreateOrConnectWithoutBlockInput)
  connectOrCreate?: Array<ReplacementsCreateOrConnectWithoutBlockInput>;

  @Field(() => ReplacementsCreateManyBlockInputEnvelope, { nullable: true })
  @Type(() => ReplacementsCreateManyBlockInputEnvelope)
  createMany?: ReplacementsCreateManyBlockInputEnvelope;

  @Field(() => [ReplacementsWhereUniqueInput], { nullable: true })
  @Type(() => ReplacementsWhereUniqueInput)
  connect?: Array<ReplacementsWhereUniqueInput>;
}
