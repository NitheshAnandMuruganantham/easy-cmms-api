import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machine_catagoryWhereUniqueInput } from '../../machine_catagory/machine-catagory/machine-catagory-where-unique.input';
import { Type } from 'class-transformer';
import { machine_catagoryCreateInput } from '../../machine_catagory/machine-catagory/machine-catagory-create.input';
import { machine_catagoryUpdateInput } from '../../machine_catagory/machine-catagory/machine-catagory-update.input';

@ArgsType()
export class UpsertOnemachineCatagoryArgs {
  @Field(() => machine_catagoryWhereUniqueInput, { nullable: false })
  @Type(() => machine_catagoryWhereUniqueInput)
  where!: machine_catagoryWhereUniqueInput;

  @Field(() => machine_catagoryCreateInput, { nullable: false })
  @Type(() => machine_catagoryCreateInput)
  create!: machine_catagoryCreateInput;

  @Field(() => machine_catagoryUpdateInput, { nullable: false })
  @Type(() => machine_catagoryUpdateInput)
  update!: machine_catagoryUpdateInput;
}
