import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsUpdateWithoutReplacements_scheduledInput } from './items-update-without-replacements-scheduled.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutReplacements_scheduledInput } from './items-create-without-replacements-scheduled.input';

@InputType()
export class ItemsUpsertWithoutReplacements_scheduledInput {
  @Field(() => ItemsUpdateWithoutReplacements_scheduledInput, {
    nullable: false,
  })
  @Type(() => ItemsUpdateWithoutReplacements_scheduledInput)
  update!: ItemsUpdateWithoutReplacements_scheduledInput;

  @Field(() => ItemsCreateWithoutReplacements_scheduledInput, {
    nullable: false,
  })
  @Type(() => ItemsCreateWithoutReplacements_scheduledInput)
  create!: ItemsCreateWithoutReplacements_scheduledInput;
}
