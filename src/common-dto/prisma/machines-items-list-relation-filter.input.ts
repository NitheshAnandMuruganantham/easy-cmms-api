import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machines_itemsWhereInput } from '../../machines/dto/machines-items/machines-items-where.input';

@InputType()
export class Machines_itemsListRelationFilter {
  @Field(() => machines_itemsWhereInput, { nullable: true })
  every?: machines_itemsWhereInput;

  @Field(() => machines_itemsWhereInput, { nullable: true })
  some?: machines_itemsWhereInput;

  @Field(() => machines_itemsWhereInput, { nullable: true })
  none?: machines_itemsWhereInput;
}
