import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machine_catagoryWhereUniqueInput } from '../../machine_catagory/dto/machine-catagory-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquemachineCatagoryArgs {
  @Field(() => machine_catagoryWhereUniqueInput, { nullable: false })
  @Type(() => machine_catagoryWhereUniqueInput)
  where!: machine_catagoryWhereUniqueInput;
}
