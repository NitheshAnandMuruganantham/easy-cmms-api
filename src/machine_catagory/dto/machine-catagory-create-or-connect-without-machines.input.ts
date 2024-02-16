import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machine_catagoryWhereUniqueInput } from './machine-catagory-where-unique.input';
import { Type } from 'class-transformer';
import { machine_catagoryCreateWithoutMachinesInput } from './machine-catagory-create-without-machines.input';

@InputType()
export class machine_catagoryCreateOrConnectWithoutMachinesInput {
  @Field(() => machine_catagoryWhereUniqueInput, { nullable: false })
  @Type(() => machine_catagoryWhereUniqueInput)
  where!: machine_catagoryWhereUniqueInput;

  @Field(() => machine_catagoryCreateWithoutMachinesInput, { nullable: false })
  @Type(() => machine_catagoryCreateWithoutMachinesInput)
  create!: machine_catagoryCreateWithoutMachinesInput;
}
