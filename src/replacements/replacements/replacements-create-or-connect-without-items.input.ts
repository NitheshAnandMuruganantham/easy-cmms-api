import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplacementsWhereUniqueInput } from './replacements-where-unique.input';
import { Type } from 'class-transformer';
import { ReplacementsCreateWithoutItemsInput } from './replacements-create-without-items.input';

@InputType()
export class ReplacementsCreateOrConnectWithoutItemsInput {
  @Field(() => ReplacementsWhereUniqueInput, { nullable: false })
  @Type(() => ReplacementsWhereUniqueInput)
  where!: ReplacementsWhereUniqueInput;

  @Field(() => ReplacementsCreateWithoutItemsInput, { nullable: false })
  @Type(() => ReplacementsCreateWithoutItemsInput)
  create!: ReplacementsCreateWithoutItemsInput;
}
