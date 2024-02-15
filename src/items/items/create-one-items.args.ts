import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemsCreateInput } from './items-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneItemsArgs {
  @Field(() => ItemsCreateInput, { nullable: false })
  @Type(() => ItemsCreateInput)
  data!: ItemsCreateInput;
}
