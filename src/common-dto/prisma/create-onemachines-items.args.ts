import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machines_itemsCreateInput } from '../../machines/dto/machines-items/machines-items-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemachinesItemsArgs {
  @Field(() => machines_itemsCreateInput, { nullable: false })
  @Type(() => machines_itemsCreateInput)
  data!: machines_itemsCreateInput;
}
