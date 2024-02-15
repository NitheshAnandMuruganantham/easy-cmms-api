import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsUncheckedCreateNestedManyWithoutItemCatagoryInput } from '../../items/items/items-unchecked-create-nested-many-without-item-catagory.input';

@InputType()
export class ItemCatagoryUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: bigint | number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => ItemsUncheckedCreateNestedManyWithoutItemCatagoryInput, {
    nullable: true,
  })
  items?: ItemsUncheckedCreateNestedManyWithoutItemCatagoryInput;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;
}
