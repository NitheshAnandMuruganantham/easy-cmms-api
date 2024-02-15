import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { ItemsUpdateWithoutBlockInput } from './items-update-without-block.input';
import { ItemsCreateWithoutBlockInput } from './items-create-without-block.input';

@InputType()
export class ItemsUpsertWithWhereUniqueWithoutBlockInput {
  @Field(() => ItemsWhereUniqueInput, { nullable: false })
  @Type(() => ItemsWhereUniqueInput)
  where!: ItemsWhereUniqueInput;

  @Field(() => ItemsUpdateWithoutBlockInput, { nullable: false })
  @Type(() => ItemsUpdateWithoutBlockInput)
  update!: ItemsUpdateWithoutBlockInput;

  @Field(() => ItemsCreateWithoutBlockInput, { nullable: false })
  @Type(() => ItemsCreateWithoutBlockInput)
  create!: ItemsCreateWithoutBlockInput;
}
