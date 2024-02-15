import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machine_catagoryWhereInput } from '../../machine_catagory/machine-catagory/machine-catagory-where.input';

@InputType()
export class Machine_catagoryListRelationFilter {
  @Field(() => machine_catagoryWhereInput, { nullable: true })
  every?: machine_catagoryWhereInput;

  @Field(() => machine_catagoryWhereInput, { nullable: true })
  some?: machine_catagoryWhereInput;

  @Field(() => machine_catagoryWhereInput, { nullable: true })
  none?: machine_catagoryWhereInput;
}
