import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Float } from '@nestjs/graphql';
import { catagoryCreateNestedOneWithoutItemsInput } from '../catagory/catagory-create-nested-one-without-items.input';
import { ReplacementsCreateNestedManyWithoutItemsInput } from '../../replacements/dto/replacements-create-nested-many-without-items.input';
import { BlockCreateNestedOneWithoutItemsInput } from '../../block/dto/block/block-create-nested-one-without-items.input';
import { HideField } from '@nestjs/graphql';
import { invoice_itemsCreateNestedManyWithoutItemInput } from '../../invoices/dto/invoice-items/invoice-items-create-nested-many-without-item.input';

@InputType()
export class ItemsCreateInput {
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

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => catagoryCreateNestedOneWithoutItemsInput, { nullable: false })
  catagory!: catagoryCreateNestedOneWithoutItemsInput;

  @Field(() => ReplacementsCreateNestedManyWithoutItemsInput, {
    nullable: true,
  })
  replacements?: ReplacementsCreateNestedManyWithoutItemsInput;

  @HideField()
  block!: BlockCreateNestedOneWithoutItemsInput;

  @Field(() => invoice_itemsCreateNestedManyWithoutItemInput, {
    nullable: true,
  })
  invoice_items?: invoice_itemsCreateNestedManyWithoutItemInput;
}
