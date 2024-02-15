import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ReplacementsUncheckedCreateNestedManyWithoutItemsInput } from '../../replacements/replacements/replacements-unchecked-create-nested-many-without-items.input';

@InputType()
export class ItemsUncheckedCreateWithoutItemCatagoryInput {
  @Field(() => String, { nullable: true })
  id?: bigint | number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => Int, { nullable: false })
  quantity!: number;

  @Field(() => Float, { nullable: false })
  unit_price!: number;

  @Field(() => ReplacementsUncheckedCreateNestedManyWithoutItemsInput, {
    nullable: true,
  })
  replacements_scheduled?: ReplacementsUncheckedCreateNestedManyWithoutItemsInput;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;
}
