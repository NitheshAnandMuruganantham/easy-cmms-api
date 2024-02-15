import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machine_catagoryCreateWithoutMachinesInput } from './machine-catagory-create-without-machines.input';
import { Type } from 'class-transformer';
import { machine_catagoryCreateOrConnectWithoutMachinesInput } from './machine-catagory-create-or-connect-without-machines.input';
import { machine_catagoryUpsertWithoutMachinesInput } from './machine-catagory-upsert-without-machines.input';
import { machine_catagoryWhereUniqueInput } from './machine-catagory-where-unique.input';
import { machine_catagoryUpdateWithoutMachinesInput } from './machine-catagory-update-without-machines.input';

@InputType()
export class machine_catagoryUpdateOneWithoutMachinesNestedInput {
  @Field(() => machine_catagoryCreateWithoutMachinesInput, { nullable: true })
  @Type(() => machine_catagoryCreateWithoutMachinesInput)
  create?: machine_catagoryCreateWithoutMachinesInput;

  @Field(() => machine_catagoryCreateOrConnectWithoutMachinesInput, {
    nullable: true,
  })
  @Type(() => machine_catagoryCreateOrConnectWithoutMachinesInput)
  connectOrCreate?: machine_catagoryCreateOrConnectWithoutMachinesInput;

  @Field(() => machine_catagoryUpsertWithoutMachinesInput, { nullable: true })
  @Type(() => machine_catagoryUpsertWithoutMachinesInput)
  upsert?: machine_catagoryUpsertWithoutMachinesInput;

  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;

  @Field(() => Boolean, { nullable: true })
  delete?: boolean;

  @Field(() => machine_catagoryWhereUniqueInput, { nullable: true })
  @Type(() => machine_catagoryWhereUniqueInput)
  connect?: machine_catagoryWhereUniqueInput;

  @Field(() => machine_catagoryUpdateWithoutMachinesInput, { nullable: true })
  @Type(() => machine_catagoryUpdateWithoutMachinesInput)
  update?: machine_catagoryUpdateWithoutMachinesInput;
}
