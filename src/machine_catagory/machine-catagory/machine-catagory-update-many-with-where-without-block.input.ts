import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machine_catagoryScalarWhereInput } from './machine-catagory-scalar-where.input';
import { Type } from 'class-transformer';
import { machine_catagoryUpdateManyMutationInput } from './machine-catagory-update-many-mutation.input';

@InputType()
export class machine_catagoryUpdateManyWithWhereWithoutBlockInput {
  @Field(() => machine_catagoryScalarWhereInput, { nullable: false })
  @Type(() => machine_catagoryScalarWhereInput)
  where!: machine_catagoryScalarWhereInput;

  @Field(() => machine_catagoryUpdateManyMutationInput, { nullable: false })
  @Type(() => machine_catagoryUpdateManyMutationInput)
  data!: machine_catagoryUpdateManyMutationInput;
}
