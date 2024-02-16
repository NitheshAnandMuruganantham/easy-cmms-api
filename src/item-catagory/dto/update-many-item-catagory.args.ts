import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCatagoryUpdateManyMutationInput } from './item-catagory-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ItemCatagoryWhereInput } from './item-catagory-where.input';

@ArgsType()
export class UpdateManyItemCatagoryArgs {
  @Field(() => ItemCatagoryUpdateManyMutationInput, { nullable: false })
  @Type(() => ItemCatagoryUpdateManyMutationInput)
  data!: ItemCatagoryUpdateManyMutationInput;

  @Field(() => ItemCatagoryWhereInput, { nullable: true })
  @Type(() => ItemCatagoryWhereInput)
  where?: ItemCatagoryWhereInput;
}
