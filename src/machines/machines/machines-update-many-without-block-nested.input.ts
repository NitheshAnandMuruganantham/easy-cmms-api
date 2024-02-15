import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateWithoutBlockInput } from './machines-create-without-block.input';
import { Type } from 'class-transformer';
import { MachinesCreateOrConnectWithoutBlockInput } from './machines-create-or-connect-without-block.input';
import { MachinesUpsertWithWhereUniqueWithoutBlockInput } from './machines-upsert-with-where-unique-without-block.input';
import { MachinesCreateManyBlockInputEnvelope } from './machines-create-many-block-input-envelope.input';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { MachinesUpdateWithWhereUniqueWithoutBlockInput } from './machines-update-with-where-unique-without-block.input';
import { MachinesUpdateManyWithWhereWithoutBlockInput } from './machines-update-many-with-where-without-block.input';
import { MachinesScalarWhereInput } from './machines-scalar-where.input';

@InputType()
export class MachinesUpdateManyWithoutBlockNestedInput {
  @Field(() => [MachinesCreateWithoutBlockInput], { nullable: true })
  @Type(() => MachinesCreateWithoutBlockInput)
  create?: Array<MachinesCreateWithoutBlockInput>;

  @Field(() => [MachinesCreateOrConnectWithoutBlockInput], { nullable: true })
  @Type(() => MachinesCreateOrConnectWithoutBlockInput)
  connectOrCreate?: Array<MachinesCreateOrConnectWithoutBlockInput>;

  @Field(() => [MachinesUpsertWithWhereUniqueWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => MachinesUpsertWithWhereUniqueWithoutBlockInput)
  upsert?: Array<MachinesUpsertWithWhereUniqueWithoutBlockInput>;

  @Field(() => MachinesCreateManyBlockInputEnvelope, { nullable: true })
  @Type(() => MachinesCreateManyBlockInputEnvelope)
  createMany?: MachinesCreateManyBlockInputEnvelope;

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

  @Field(() => [MachinesUpdateWithWhereUniqueWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => MachinesUpdateWithWhereUniqueWithoutBlockInput)
  update?: Array<MachinesUpdateWithWhereUniqueWithoutBlockInput>;

  @Field(() => [MachinesUpdateManyWithWhereWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => MachinesUpdateManyWithWhereWithoutBlockInput)
  updateMany?: Array<MachinesUpdateManyWithWhereWithoutBlockInput>;

  @Field(() => [MachinesScalarWhereInput], { nullable: true })
  @Type(() => MachinesScalarWhereInput)
  deleteMany?: Array<MachinesScalarWhereInput>;
}
