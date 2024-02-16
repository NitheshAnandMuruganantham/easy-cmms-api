import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutReplacements_scheduledInput } from './items-create-without-replacements-scheduled.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutReplacements_scheduledInput } from './items-create-or-connect-without-replacements-scheduled.input';
import { ItemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class ItemsCreateNestedOneWithoutReplacements_scheduledInput {
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

  @Field(() => ItemsWhereUniqueInput, { nullable: true })
  @Type(() => ItemsWhereUniqueInput)
  connect?: ItemsWhereUniqueInput;
}
