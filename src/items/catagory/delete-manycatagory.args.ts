import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { catagoryWhereInput } from './catagory-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManycatagoryArgs {
  @Field(() => catagoryWhereInput, { nullable: true })
  @Type(() => catagoryWhereInput)
  where?: catagoryWhereInput;
}
