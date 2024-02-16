import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machines_itemsCreateWithoutMachineInput } from './machines-items-create-without-machine.input';
import { Type } from 'class-transformer';
import { machines_itemsCreateOrConnectWithoutMachineInput } from './machines-items-create-or-connect-without-machine.input';
import { machines_itemsUpsertWithWhereUniqueWithoutMachineInput } from './machines-items-upsert-with-where-unique-without-machine.input';
import { machines_itemsCreateManyMachineInputEnvelope } from './machines-items-create-many-machine-input-envelope.input';
import { machines_itemsWhereUniqueInput } from './machines-items-where-unique.input';
import { machines_itemsUpdateWithWhereUniqueWithoutMachineInput } from './machines-items-update-with-where-unique-without-machine.input';
import { machines_itemsUpdateManyWithWhereWithoutMachineInput } from './machines-items-update-many-with-where-without-machine.input';
import { machines_itemsScalarWhereInput } from './machines-items-scalar-where.input';

@InputType()
export class machines_itemsUpdateManyWithoutMachineNestedInput {
  @Field(() => [machines_itemsCreateWithoutMachineInput], { nullable: true })
  @Type(() => machines_itemsCreateWithoutMachineInput)
  create?: Array<machines_itemsCreateWithoutMachineInput>;

  @Field(() => [machines_itemsCreateOrConnectWithoutMachineInput], {
    nullable: true,
  })
  @Type(() => machines_itemsCreateOrConnectWithoutMachineInput)
  connectOrCreate?: Array<machines_itemsCreateOrConnectWithoutMachineInput>;

  @Field(() => [machines_itemsUpsertWithWhereUniqueWithoutMachineInput], {
    nullable: true,
  })
  @Type(() => machines_itemsUpsertWithWhereUniqueWithoutMachineInput)
  upsert?: Array<machines_itemsUpsertWithWhereUniqueWithoutMachineInput>;

  @Field(() => machines_itemsCreateManyMachineInputEnvelope, { nullable: true })
  @Type(() => machines_itemsCreateManyMachineInputEnvelope)
  createMany?: machines_itemsCreateManyMachineInputEnvelope;

  @Field(() => [machines_itemsWhereUniqueInput], { nullable: true })
  @Type(() => machines_itemsWhereUniqueInput)
  set?: Array<machines_itemsWhereUniqueInput>;

  @Field(() => [machines_itemsWhereUniqueInput], { nullable: true })
  @Type(() => machines_itemsWhereUniqueInput)
  disconnect?: Array<machines_itemsWhereUniqueInput>;

  @Field(() => [machines_itemsWhereUniqueInput], { nullable: true })
  @Type(() => machines_itemsWhereUniqueInput)
  delete?: Array<machines_itemsWhereUniqueInput>;

  @Field(() => [machines_itemsWhereUniqueInput], { nullable: true })
  @Type(() => machines_itemsWhereUniqueInput)
  connect?: Array<machines_itemsWhereUniqueInput>;

  @Field(() => [machines_itemsUpdateWithWhereUniqueWithoutMachineInput], {
    nullable: true,
  })
  @Type(() => machines_itemsUpdateWithWhereUniqueWithoutMachineInput)
  update?: Array<machines_itemsUpdateWithWhereUniqueWithoutMachineInput>;

  @Field(() => [machines_itemsUpdateManyWithWhereWithoutMachineInput], {
    nullable: true,
  })
  @Type(() => machines_itemsUpdateManyWithWhereWithoutMachineInput)
  updateMany?: Array<machines_itemsUpdateManyWithWhereWithoutMachineInput>;

  @Field(() => [machines_itemsScalarWhereInput], { nullable: true })
  @Type(() => machines_itemsScalarWhereInput)
  deleteMany?: Array<machines_itemsScalarWhereInput>;
}
