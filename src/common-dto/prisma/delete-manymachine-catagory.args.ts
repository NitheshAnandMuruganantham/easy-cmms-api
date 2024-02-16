import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machine_catagoryWhereInput } from '../../machine_catagory/dto/machine-catagory-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymachineCatagoryArgs {
  @Field(() => machine_catagoryWhereInput, { nullable: true })
  @Type(() => machine_catagoryWhereInput)
  where?: machine_catagoryWhereInput;
}
