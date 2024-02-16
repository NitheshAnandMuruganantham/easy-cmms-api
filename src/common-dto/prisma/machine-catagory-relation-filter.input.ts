import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machine_catagoryWhereInput } from '../../machine_catagory/dto/machine-catagory-where.input';

@InputType()
export class Machine_catagoryRelationFilter {
  @Field(() => machine_catagoryWhereInput, { nullable: true })
  is?: machine_catagoryWhereInput;

  @Field(() => machine_catagoryWhereInput, { nullable: true })
  isNot?: machine_catagoryWhereInput;
}
