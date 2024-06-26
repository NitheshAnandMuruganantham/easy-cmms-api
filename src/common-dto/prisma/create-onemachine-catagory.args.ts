import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machine_catagoryCreateInput } from '../../machine_catagory/dto/machine-catagory-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemachineCatagoryArgs {
  @Field(() => machine_catagoryCreateInput, { nullable: false })
  @Type(() => machine_catagoryCreateInput)
  data!: machine_catagoryCreateInput;
}
