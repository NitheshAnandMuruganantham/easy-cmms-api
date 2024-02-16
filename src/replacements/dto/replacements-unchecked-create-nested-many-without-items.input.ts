import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplacementsCreateWithoutItemsInput } from './replacements-create-without-items.input';
import { Type } from 'class-transformer';
import { ReplacementsCreateOrConnectWithoutItemsInput } from './replacements-create-or-connect-without-items.input';
import { ReplacementsCreateManyItemsInputEnvelope } from './replacements-create-many-items-input-envelope.input';
import { ReplacementsWhereUniqueInput } from './replacements-where-unique.input';

@InputType()
export class ReplacementsUncheckedCreateNestedManyWithoutItemsInput {
  @Field(() => [ReplacementsCreateWithoutItemsInput], { nullable: true })
  @Type(() => ReplacementsCreateWithoutItemsInput)
  create?: Array<ReplacementsCreateWithoutItemsInput>;

  @Field(() => [ReplacementsCreateOrConnectWithoutItemsInput], {
    nullable: true,
  })
  @Type(() => ReplacementsCreateOrConnectWithoutItemsInput)
  connectOrCreate?: Array<ReplacementsCreateOrConnectWithoutItemsInput>;

  @Field(() => ReplacementsCreateManyItemsInputEnvelope, { nullable: true })
  @Type(() => ReplacementsCreateManyItemsInputEnvelope)
  createMany?: ReplacementsCreateManyItemsInputEnvelope;

  @Field(() => [ReplacementsWhereUniqueInput], { nullable: true })
  @Type(() => ReplacementsWhereUniqueInput)
  connect?: Array<ReplacementsWhereUniqueInput>;
}
