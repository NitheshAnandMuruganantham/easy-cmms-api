import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machines_itemsWhereUniqueInput } from './machines-items-where-unique.input';
import { Type } from 'class-transformer';
import { machines_itemsUpdateWithoutBlockInput } from './machines-items-update-without-block.input';
import { machines_itemsCreateWithoutBlockInput } from './machines-items-create-without-block.input';

@InputType()
export class machines_itemsUpsertWithWhereUniqueWithoutBlockInput {
  @Field(() => machines_itemsWhereUniqueInput, { nullable: false })
  @Type(() => machines_itemsWhereUniqueInput)
  where!: machines_itemsWhereUniqueInput;

  @Field(() => machines_itemsUpdateWithoutBlockInput, { nullable: false })
  @Type(() => machines_itemsUpdateWithoutBlockInput)
  update!: machines_itemsUpdateWithoutBlockInput;

  @Field(() => machines_itemsCreateWithoutBlockInput, { nullable: false })
  @Type(() => machines_itemsCreateWithoutBlockInput)
  create!: machines_itemsCreateWithoutBlockInput;
}
