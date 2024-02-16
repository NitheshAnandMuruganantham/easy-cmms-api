import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { catagoryWhereInput } from '../../items/catagory/catagory-where.input';

@InputType()
export class CatagoryListRelationFilter {
  @Field(() => catagoryWhereInput, { nullable: true })
  every?: catagoryWhereInput;

  @Field(() => catagoryWhereInput, { nullable: true })
  some?: catagoryWhereInput;

  @Field(() => catagoryWhereInput, { nullable: true })
  none?: catagoryWhereInput;
}
