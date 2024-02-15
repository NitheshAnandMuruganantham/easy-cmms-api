import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutMachinesInput } from './items-create-without-machines.input';

@InputType()
export class ItemsCreateOrConnectWithoutMachinesInput {
  @Field(() => ItemsWhereUniqueInput, { nullable: false })
  @Type(() => ItemsWhereUniqueInput)
  where!: ItemsWhereUniqueInput;

  @Field(() => ItemsCreateWithoutMachinesInput, { nullable: false })
  @Type(() => ItemsCreateWithoutMachinesInput)
  create!: ItemsCreateWithoutMachinesInput;
}
