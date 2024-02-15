import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateWithoutSection_machines_sectionTosectionInput } from './machines-create-without-section-machines-section-tosection.input';
import { Type } from 'class-transformer';
import { MachinesCreateOrConnectWithoutSection_machines_sectionTosectionInput } from './machines-create-or-connect-without-section-machines-section-tosection.input';
import { MachinesUpsertWithWhereUniqueWithoutSection_machines_sectionTosectionInput } from './machines-upsert-with-where-unique-without-section-machines-section-tosection.input';
import { MachinesCreateManySection_machines_sectionTosectionInputEnvelope } from './machines-create-many-section-machines-section-tosection-input-envelope.input';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { MachinesUpdateWithWhereUniqueWithoutSection_machines_sectionTosectionInput } from './machines-update-with-where-unique-without-section-machines-section-tosection.input';
import { MachinesUpdateManyWithWhereWithoutSection_machines_sectionTosectionInput } from './machines-update-many-with-where-without-section-machines-section-tosection.input';
import { MachinesScalarWhereInput } from './machines-scalar-where.input';

@InputType()
export class MachinesUncheckedUpdateManyWithoutSection_machines_sectionTosectionNestedInput {
  @Field(() => [MachinesCreateWithoutSection_machines_sectionTosectionInput], {
    nullable: true,
  })
  @Type(() => MachinesCreateWithoutSection_machines_sectionTosectionInput)
  create?: Array<MachinesCreateWithoutSection_machines_sectionTosectionInput>;

  @Field(
    () => [
      MachinesCreateOrConnectWithoutSection_machines_sectionTosectionInput,
    ],
    { nullable: true },
  )
  @Type(
    () => MachinesCreateOrConnectWithoutSection_machines_sectionTosectionInput,
  )
  connectOrCreate?: Array<MachinesCreateOrConnectWithoutSection_machines_sectionTosectionInput>;

  @Field(
    () => [
      MachinesUpsertWithWhereUniqueWithoutSection_machines_sectionTosectionInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      MachinesUpsertWithWhereUniqueWithoutSection_machines_sectionTosectionInput,
  )
  upsert?: Array<MachinesUpsertWithWhereUniqueWithoutSection_machines_sectionTosectionInput>;

  @Field(
    () => MachinesCreateManySection_machines_sectionTosectionInputEnvelope,
    { nullable: true },
  )
  @Type(() => MachinesCreateManySection_machines_sectionTosectionInputEnvelope)
  createMany?: MachinesCreateManySection_machines_sectionTosectionInputEnvelope;

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

  @Field(
    () => [
      MachinesUpdateWithWhereUniqueWithoutSection_machines_sectionTosectionInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      MachinesUpdateWithWhereUniqueWithoutSection_machines_sectionTosectionInput,
  )
  update?: Array<MachinesUpdateWithWhereUniqueWithoutSection_machines_sectionTosectionInput>;

  @Field(
    () => [
      MachinesUpdateManyWithWhereWithoutSection_machines_sectionTosectionInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      MachinesUpdateManyWithWhereWithoutSection_machines_sectionTosectionInput,
  )
  updateMany?: Array<MachinesUpdateManyWithWhereWithoutSection_machines_sectionTosectionInput>;

  @Field(() => [MachinesScalarWhereInput], { nullable: true })
  @Type(() => MachinesScalarWhereInput)
  deleteMany?: Array<MachinesScalarWhereInput>;
}
