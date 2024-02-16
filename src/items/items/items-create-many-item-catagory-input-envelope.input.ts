import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateManyItemCatagoryInput } from './items-create-many-item-catagory.input';
import { Type } from 'class-transformer';

@InputType()
export class ItemsCreateManyItemCatagoryInputEnvelope {
  @Field(() => [ItemsCreateManyItemCatagoryInput], { nullable: false })
  @Type(() => ItemsCreateManyItemCatagoryInput)
  data!: Array<ItemsCreateManyItemCatagoryInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
