import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { machines_itemsMachine_idItem_idCompoundUniqueInput } from './machines-items-machine-id-item-id-compound-unique.input';

@InputType()
export class machines_itemsWhereUniqueInput {
  @Field(() => GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => machines_itemsMachine_idItem_idCompoundUniqueInput, {
    nullable: true,
  })
  machine_id_item_id?: machines_itemsMachine_idItem_idCompoundUniqueInput;
}
