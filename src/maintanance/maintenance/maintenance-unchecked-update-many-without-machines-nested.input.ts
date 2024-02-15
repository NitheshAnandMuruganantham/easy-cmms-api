import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceCreateWithoutMachinesInput } from './maintenance-create-without-machines.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateOrConnectWithoutMachinesInput } from './maintenance-create-or-connect-without-machines.input';
import { MaintenanceUpsertWithWhereUniqueWithoutMachinesInput } from './maintenance-upsert-with-where-unique-without-machines.input';
import { MaintenanceCreateManyMachinesInputEnvelope } from './maintenance-create-many-machines-input-envelope.input';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';
import { MaintenanceUpdateWithWhereUniqueWithoutMachinesInput } from './maintenance-update-with-where-unique-without-machines.input';
import { MaintenanceUpdateManyWithWhereWithoutMachinesInput } from './maintenance-update-many-with-where-without-machines.input';
import { MaintenanceScalarWhereInput } from './maintenance-scalar-where.input';

@InputType()
export class MaintenanceUncheckedUpdateManyWithoutMachinesNestedInput {
  @Field(() => [MaintenanceCreateWithoutMachinesInput], { nullable: true })
  @Type(() => MaintenanceCreateWithoutMachinesInput)
  create?: Array<MaintenanceCreateWithoutMachinesInput>;

  @Field(() => [MaintenanceCreateOrConnectWithoutMachinesInput], {
    nullable: true,
  })
  @Type(() => MaintenanceCreateOrConnectWithoutMachinesInput)
  connectOrCreate?: Array<MaintenanceCreateOrConnectWithoutMachinesInput>;

  @Field(() => [MaintenanceUpsertWithWhereUniqueWithoutMachinesInput], {
    nullable: true,
  })
  @Type(() => MaintenanceUpsertWithWhereUniqueWithoutMachinesInput)
  upsert?: Array<MaintenanceUpsertWithWhereUniqueWithoutMachinesInput>;

  @Field(() => MaintenanceCreateManyMachinesInputEnvelope, { nullable: true })
  @Type(() => MaintenanceCreateManyMachinesInputEnvelope)
  createMany?: MaintenanceCreateManyMachinesInputEnvelope;

  @Field(() => [MaintenanceWhereUniqueInput], { nullable: true })
  @Type(() => MaintenanceWhereUniqueInput)
  set?: Array<MaintenanceWhereUniqueInput>;

  @Field(() => [MaintenanceWhereUniqueInput], { nullable: true })
  @Type(() => MaintenanceWhereUniqueInput)
  disconnect?: Array<MaintenanceWhereUniqueInput>;

  @Field(() => [MaintenanceWhereUniqueInput], { nullable: true })
  @Type(() => MaintenanceWhereUniqueInput)
  delete?: Array<MaintenanceWhereUniqueInput>;

  @Field(() => [MaintenanceWhereUniqueInput], { nullable: true })
  @Type(() => MaintenanceWhereUniqueInput)
  connect?: Array<MaintenanceWhereUniqueInput>;

  @Field(() => [MaintenanceUpdateWithWhereUniqueWithoutMachinesInput], {
    nullable: true,
  })
  @Type(() => MaintenanceUpdateWithWhereUniqueWithoutMachinesInput)
  update?: Array<MaintenanceUpdateWithWhereUniqueWithoutMachinesInput>;

  @Field(() => [MaintenanceUpdateManyWithWhereWithoutMachinesInput], {
    nullable: true,
  })
  @Type(() => MaintenanceUpdateManyWithWhereWithoutMachinesInput)
  updateMany?: Array<MaintenanceUpdateManyWithWhereWithoutMachinesInput>;

  @Field(() => [MaintenanceScalarWhereInput], { nullable: true })
  @Type(() => MaintenanceScalarWhereInput)
  deleteMany?: Array<MaintenanceScalarWhereInput>;
}
