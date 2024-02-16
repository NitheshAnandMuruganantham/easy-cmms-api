import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { catagoryWhereInput } from '../../items/catagory/catagory-where.input';

@InputType()
export class CatagoryRelationFilter {
  @Field(() => catagoryWhereInput, { nullable: true })
  is?: catagoryWhereInput;

  @Field(() => catagoryWhereInput, { nullable: true })
  isNot?: catagoryWhereInput;
}
