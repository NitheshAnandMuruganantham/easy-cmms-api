import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ItemsCreateNestedOneWithoutReplacementsInput } from '../../items/items/items-create-nested-one-without-replacements.input';
import { BlockCreateNestedOneWithoutReplacementsInput } from '../../block/dto/block/block-create-nested-one-without-replacements.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class ReplacementsCreateWithoutMaintenanceInput {
  @Field(() => GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => Int, { nullable: false })
  quantity!: number;

  @Field(() => GraphQLJSON, { nullable: true })
  metadata?: any;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Boolean, { nullable: true })
  approved?: boolean;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => ItemsCreateNestedOneWithoutReplacementsInput, {
    nullable: false,
  })
  items!: ItemsCreateNestedOneWithoutReplacementsInput;

  @HideField()
  block!: BlockCreateNestedOneWithoutReplacementsInput;
}
