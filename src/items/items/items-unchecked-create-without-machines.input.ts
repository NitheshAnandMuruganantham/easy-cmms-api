import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ItemsCreatemachines_idInput } from './items-createmachines-id.input';
import { ReplacementsUncheckedCreateNestedManyWithoutItemsInput } from '../../replacements/dto/replacements-unchecked-create-nested-many-without-items.input';

@InputType()
export class ItemsUncheckedCreateWithoutMachinesInput {
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

  @Field(() => GraphQLBigInt, { nullable: false })
  catagory_id!: bigint | number;

  @Field(() => ItemsCreatemachines_idInput, { nullable: true })
  machines_id?: ItemsCreatemachines_idInput;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => ReplacementsUncheckedCreateNestedManyWithoutItemsInput, {
    nullable: true,
  })
  replacements?: ReplacementsUncheckedCreateNestedManyWithoutItemsInput;
}
