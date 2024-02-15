import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machine_catagoryCreateManyInput } from '../../machine_catagory/machine-catagory/machine-catagory-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManymachineCatagoryArgs {
  @Field(() => [machine_catagoryCreateManyInput], { nullable: false })
  @Type(() => machine_catagoryCreateManyInput)
  data!: Array<machine_catagoryCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
