import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machines_itemsCreateWithoutMachineInput } from './machines-items-create-without-machine.input';
import { Type } from 'class-transformer';
import { machines_itemsCreateOrConnectWithoutMachineInput } from './machines-items-create-or-connect-without-machine.input';
import { machines_itemsCreateManyMachineInputEnvelope } from './machines-items-create-many-machine-input-envelope.input';
import { machines_itemsWhereUniqueInput } from './machines-items-where-unique.input';

@InputType()
export class machines_itemsUncheckedCreateNestedManyWithoutMachineInput {
  @Field(() => [machines_itemsCreateWithoutMachineInput], { nullable: true })
  @Type(() => machines_itemsCreateWithoutMachineInput)
  create?: Array<machines_itemsCreateWithoutMachineInput>;

  @Field(() => [machines_itemsCreateOrConnectWithoutMachineInput], {
    nullable: true,
  })
  @Type(() => machines_itemsCreateOrConnectWithoutMachineInput)
  connectOrCreate?: Array<machines_itemsCreateOrConnectWithoutMachineInput>;

  @Field(() => machines_itemsCreateManyMachineInputEnvelope, { nullable: true })
  @Type(() => machines_itemsCreateManyMachineInputEnvelope)
  createMany?: machines_itemsCreateManyMachineInputEnvelope;

  @Field(() => [machines_itemsWhereUniqueInput], { nullable: true })
  @Type(() => machines_itemsWhereUniqueInput)
  connect?: Array<machines_itemsWhereUniqueInput>;
}
