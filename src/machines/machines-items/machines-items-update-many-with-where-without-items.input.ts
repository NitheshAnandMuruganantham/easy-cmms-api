import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machines_itemsScalarWhereInput } from './machines-items-scalar-where.input';
import { Type } from 'class-transformer';
import { machines_itemsUpdateManyMutationInput } from './machines-items-update-many-mutation.input';

@InputType()
export class machines_itemsUpdateManyWithWhereWithoutItemsInput {
  @Field(() => machines_itemsScalarWhereInput, { nullable: false })
  @Type(() => machines_itemsScalarWhereInput)
  where!: machines_itemsScalarWhereInput;

  @Field(() => machines_itemsUpdateManyMutationInput, { nullable: false })
  @Type(() => machines_itemsUpdateManyMutationInput)
  data!: machines_itemsUpdateManyMutationInput;
}
