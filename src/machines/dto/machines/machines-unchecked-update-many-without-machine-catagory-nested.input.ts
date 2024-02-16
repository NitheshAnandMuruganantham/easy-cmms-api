import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateWithoutMachine_catagoryInput } from './machines-create-without-machine-catagory.input';
import { Type } from 'class-transformer';
import { MachinesCreateOrConnectWithoutMachine_catagoryInput } from './machines-create-or-connect-without-machine-catagory.input';
import { MachinesUpsertWithWhereUniqueWithoutMachine_catagoryInput } from './machines-upsert-with-where-unique-without-machine-catagory.input';
import { MachinesCreateManyMachine_catagoryInputEnvelope } from './machines-create-many-machine-catagory-input-envelope.input';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { MachinesUpdateWithWhereUniqueWithoutMachine_catagoryInput } from './machines-update-with-where-unique-without-machine-catagory.input';
import { MachinesUpdateManyWithWhereWithoutMachine_catagoryInput } from './machines-update-many-with-where-without-machine-catagory.input';
import { MachinesScalarWhereInput } from './machines-scalar-where.input';

@InputType()
export class MachinesUncheckedUpdateManyWithoutMachine_catagoryNestedInput {
  @Field(() => [MachinesCreateWithoutMachine_catagoryInput], { nullable: true })
  @Type(() => MachinesCreateWithoutMachine_catagoryInput)
  create?: Array<MachinesCreateWithoutMachine_catagoryInput>;

  @Field(() => [MachinesCreateOrConnectWithoutMachine_catagoryInput], {
    nullable: true,
  })
  @Type(() => MachinesCreateOrConnectWithoutMachine_catagoryInput)
  connectOrCreate?: Array<MachinesCreateOrConnectWithoutMachine_catagoryInput>;

  @Field(() => [MachinesUpsertWithWhereUniqueWithoutMachine_catagoryInput], {
    nullable: true,
  })
  @Type(() => MachinesUpsertWithWhereUniqueWithoutMachine_catagoryInput)
  upsert?: Array<MachinesUpsertWithWhereUniqueWithoutMachine_catagoryInput>;

  @Field(() => MachinesCreateManyMachine_catagoryInputEnvelope, {
    nullable: true,
  })
  @Type(() => MachinesCreateManyMachine_catagoryInputEnvelope)
  createMany?: MachinesCreateManyMachine_catagoryInputEnvelope;

  @Field(() => [MachinesWhereUniqueInput], { nullable: true })
  @Type(() => MachinesWhereUniqueInput)
  set?: Array<MachinesWhereUniqueInput>;

  @Field(() => [MachinesWhereUniqueInput], { nullable: true })
  @Type(() => MachinesWhereUniqueInput)
  disconnect?: Array<MachinesWhereUniqueInput>;

  @Field(() => [MachinesWhereUniqueInput], { nullable: true })
  @Type(() => MachinesWhereUniqueInput)
  delete?: Array<MachinesWhereUniqueInput>;

  @Field(() => [MachinesWhereUniqueInput], { nullable: true })
  @Type(() => MachinesWhereUniqueInput)
  connect?: Array<MachinesWhereUniqueInput>;

  @Field(() => [MachinesUpdateWithWhereUniqueWithoutMachine_catagoryInput], {
    nullable: true,
  })
  @Type(() => MachinesUpdateWithWhereUniqueWithoutMachine_catagoryInput)
  update?: Array<MachinesUpdateWithWhereUniqueWithoutMachine_catagoryInput>;

  @Field(() => [MachinesUpdateManyWithWhereWithoutMachine_catagoryInput], {
    nullable: true,
  })
  @Type(() => MachinesUpdateManyWithWhereWithoutMachine_catagoryInput)
  updateMany?: Array<MachinesUpdateManyWithWhereWithoutMachine_catagoryInput>;

  @Field(() => [MachinesScalarWhereInput], { nullable: true })
  @Type(() => MachinesScalarWhereInput)
  deleteMany?: Array<MachinesScalarWhereInput>;
}
