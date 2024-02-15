import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { catagoryCreateInput } from './catagory-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnecatagoryArgs {
  @Field(() => catagoryCreateInput, { nullable: false })
  @Type(() => catagoryCreateInput)
  data!: catagoryCreateInput;
}
