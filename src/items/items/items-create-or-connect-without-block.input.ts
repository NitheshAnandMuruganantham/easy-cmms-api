import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutBlockInput } from './items-create-without-block.input';

@InputType()
export class ItemsCreateOrConnectWithoutBlockInput {
  @Field(() => ItemsWhereUniqueInput, { nullable: false })
  @Type(() => ItemsWhereUniqueInput)
  where!: ItemsWhereUniqueInput;

  @Field(() => ItemsCreateWithoutBlockInput, { nullable: false })
  @Type(() => ItemsCreateWithoutBlockInput)
  create!: ItemsCreateWithoutBlockInput;
}
