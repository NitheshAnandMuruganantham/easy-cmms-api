import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutReplacementsInput } from './items-create-without-replacements.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutReplacementsInput } from './items-create-or-connect-without-replacements.input';
import { ItemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class ItemsCreateNestedOneWithoutReplacementsInput {
  @Field(() => ItemsCreateWithoutReplacementsInput, { nullable: true })
  @Type(() => ItemsCreateWithoutReplacementsInput)
  create?: ItemsCreateWithoutReplacementsInput;

  @Field(() => ItemsCreateOrConnectWithoutReplacementsInput, { nullable: true })
  @Type(() => ItemsCreateOrConnectWithoutReplacementsInput)
  connectOrCreate?: ItemsCreateOrConnectWithoutReplacementsInput;

  @Field(() => ItemsWhereUniqueInput, { nullable: true })
  @Type(() => ItemsWhereUniqueInput)
  connect?: ItemsWhereUniqueInput;
}
