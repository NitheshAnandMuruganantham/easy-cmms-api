import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machine_catagoryUpdateWithoutMachinesInput } from './machine-catagory-update-without-machines.input';
import { Type } from 'class-transformer';
import { machine_catagoryCreateWithoutMachinesInput } from './machine-catagory-create-without-machines.input';

@InputType()
export class machine_catagoryUpsertWithoutMachinesInput {
  @Field(() => machine_catagoryUpdateWithoutMachinesInput, { nullable: false })
  @Type(() => machine_catagoryUpdateWithoutMachinesInput)
  update!: machine_catagoryUpdateWithoutMachinesInput;

  @Field(() => machine_catagoryCreateWithoutMachinesInput, { nullable: false })
  @Type(() => machine_catagoryCreateWithoutMachinesInput)
  create!: machine_catagoryCreateWithoutMachinesInput;
}
