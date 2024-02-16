import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { ItemsUncheckedCreateNestedManyWithoutCatagoryInput } from '../items/items-unchecked-create-nested-many-without-catagory.input';

@InputType()
export class catagoryUncheckedCreateWithoutBlockInput {
  @Field(() => GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => ItemsUncheckedCreateNestedManyWithoutCatagoryInput, {
    nullable: true,
  })
  items?: ItemsUncheckedCreateNestedManyWithoutCatagoryInput;
}
