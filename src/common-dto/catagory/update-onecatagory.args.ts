import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { catagoryUpdateInput } from './catagory-update.input';
import { Type } from 'class-transformer';
import { catagoryWhereUniqueInput } from './catagory-where-unique.input';

@ArgsType()
export class UpdateOnecatagoryArgs {
  @Field(() => catagoryUpdateInput, { nullable: false })
  @Type(() => catagoryUpdateInput)
  data!: catagoryUpdateInput;

  @Field(() => catagoryWhereUniqueInput, { nullable: false })
  @Type(() => catagoryWhereUniqueInput)
  where!: catagoryWhereUniqueInput;
}
