import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { catagoryWhereUniqueInput } from './catagory-where-unique.input';
import { Type } from 'class-transformer';
import { catagoryCreateInput } from './catagory-create.input';
import { catagoryUpdateInput } from './catagory-update.input';

@ArgsType()
export class UpsertOnecatagoryArgs {
  @Field(() => catagoryWhereUniqueInput, { nullable: false })
  @Type(() => catagoryWhereUniqueInput)
  where!: catagoryWhereUniqueInput;

  @Field(() => catagoryCreateInput, { nullable: false })
  @Type(() => catagoryCreateInput)
  create!: catagoryCreateInput;

  @Field(() => catagoryUpdateInput, { nullable: false })
  @Type(() => catagoryUpdateInput)
  update!: catagoryUpdateInput;
}
