import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Float } from '@nestjs/graphql';
import { ReplacementsUncheckedCreateNestedManyWithoutItemsInput } from '../../replacements/replacements/replacements-unchecked-create-nested-many-without-items.input';
import { invoice_itemsUncheckedCreateNestedManyWithoutItemInput } from '../../invoices/invoice-items/invoice-items-unchecked-create-nested-many-without-item.input';

@InputType()
export class ItemsUncheckedCreateWithoutBlockInput {
  @Field(() => GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => Float, { nullable: false })
  quantity!: number;

  @Field(() => Float, { nullable: false })
  unit_price!: number;

  @Field(() => GraphQLBigInt, { nullable: false })
  catagory_id!: bigint | number;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => ReplacementsUncheckedCreateNestedManyWithoutItemsInput, {
    nullable: true,
  })
  replacements?: ReplacementsUncheckedCreateNestedManyWithoutItemsInput;

  @Field(() => invoice_itemsUncheckedCreateNestedManyWithoutItemInput, {
    nullable: true,
  })
  invoice_items?: invoice_itemsUncheckedCreateNestedManyWithoutItemInput;
}
