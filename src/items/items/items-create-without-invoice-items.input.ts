import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Float } from '@nestjs/graphql';
import { catagoryCreateNestedOneWithoutItemsInput } from '../../common-dto/catagory/catagory-create-nested-one-without-items.input';
import { ReplacementsCreateNestedManyWithoutItemsInput } from '../../replacements/replacements/replacements-create-nested-many-without-items.input';
import { BlockCreateNestedOneWithoutItemsInput } from '../../block/block/block-create-nested-one-without-items.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ItemsCreateWithoutInvoice_itemsInput {
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
}