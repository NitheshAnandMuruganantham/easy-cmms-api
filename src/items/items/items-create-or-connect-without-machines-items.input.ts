import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutMachines_itemsInput } from './items-create-without-machines-items.input';

@InputType()
export class ItemsCreateOrConnectWithoutMachines_itemsInput {
  @Field(() => ItemsWhereUniqueInput, { nullable: false })
  @Type(() => ItemsWhereUniqueInput)
  where!: ItemsWhereUniqueInput;

  @Field(() => ItemsCreateWithoutMachines_itemsInput, { nullable: false })
  @Type(() => ItemsCreateWithoutMachines_itemsInput)
  create!: ItemsCreateWithoutMachines_itemsInput;
}
