import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ItemsCreatemachines_idInput } from './items-createmachines-id.input';
import { catagoryCreateNestedOneWithoutItemsInput } from '../catagory/catagory-create-nested-one-without-items.input';
import { ReplacementsCreateNestedManyWithoutItemsInput } from '../../replacements/dto/replacements-create-nested-many-without-items.input';

@InputType()
export class ItemsCreateWithoutMachinesInput {
  @Field(() => GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => Int, { nullable: false })
  quantity!: number;

  @Field(() => Float, { nullable: false })
  unit_price!: number;

  @Field(() => ItemsCreatemachines_idInput, { nullable: true })
  machines_id?: ItemsCreatemachines_idInput;

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
}
