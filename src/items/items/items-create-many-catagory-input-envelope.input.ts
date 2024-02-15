import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateManyCatagoryInput } from './items-create-many-catagory.input';
import { Type } from 'class-transformer';

@InputType()
export class ItemsCreateManyCatagoryInputEnvelope {
  @Field(() => [ItemsCreateManyCatagoryInput], { nullable: false })
  @Type(() => ItemsCreateManyCatagoryInput)
  data!: Array<ItemsCreateManyCatagoryInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
