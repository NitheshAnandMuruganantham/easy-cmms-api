import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machines_itemsWhereInput } from '../../machines/dto/machines-items/machines-items-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymachinesItemsArgs {
  @Field(() => machines_itemsWhereInput, { nullable: true })
  @Type(() => machines_itemsWhereInput)
  where?: machines_itemsWhereInput;
}
