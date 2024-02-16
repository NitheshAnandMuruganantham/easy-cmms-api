import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutReplacements_scheduledInput } from './items-create-without-replacements-scheduled.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutReplacements_scheduledInput } from './items-create-or-connect-without-replacements-scheduled.input';
import { ItemsUpsertWithoutReplacements_scheduledInput } from './items-upsert-without-replacements-scheduled.input';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { ItemsUpdateWithoutReplacements_scheduledInput } from './items-update-without-replacements-scheduled.input';

@InputType()
export class ItemsUpdateOneRequiredWithoutReplacements_scheduledNestedInput {
  @Field(() => ItemsCreateWithoutReplacements_scheduledInput, {
    nullable: true,
  })
  @Type(() => ItemsCreateWithoutReplacements_scheduledInput)
  create?: ItemsCreateWithoutReplacements_scheduledInput;

  @Field(() => ItemsCreateOrConnectWithoutReplacements_scheduledInput, {
    nullable: true,
  })
  @Type(() => ItemsCreateOrConnectWithoutReplacements_scheduledInput)
  connectOrCreate?: ItemsCreateOrConnectWithoutReplacements_scheduledInput;

  @Field(() => ItemsUpsertWithoutReplacements_scheduledInput, {
    nullable: true,
  })
  @Type(() => ItemsUpsertWithoutReplacements_scheduledInput)
  upsert?: ItemsUpsertWithoutReplacements_scheduledInput;

  @Field(() => ItemsWhereUniqueInput, { nullable: true })
  @Type(() => ItemsWhereUniqueInput)
  connect?: ItemsWhereUniqueInput;

  @Field(() => ItemsUpdateWithoutReplacements_scheduledInput, {
    nullable: true,
  })
  @Type(() => ItemsUpdateWithoutReplacements_scheduledInput)
  update?: ItemsUpdateWithoutReplacements_scheduledInput;
}
