import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { BlockCreateNestedOneWithoutCatagoryInput } from '../../block/dto/block/block-create-nested-one-without-catagory.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class catagoryCreateWithoutItemsInput {
  @Field(() => GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @HideField()
  block!: BlockCreateNestedOneWithoutCatagoryInput;
}
