import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceCreateWithoutBlockInput } from './maintenance-create-without-block.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateOrConnectWithoutBlockInput } from './maintenance-create-or-connect-without-block.input';
import { MaintenanceCreateManyBlockInputEnvelope } from './maintenance-create-many-block-input-envelope.input';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';

@InputType()
export class MaintenanceCreateNestedManyWithoutBlockInput {
  @Field(() => [MaintenanceCreateWithoutBlockInput], { nullable: true })
  @Type(() => MaintenanceCreateWithoutBlockInput)
  create?: Array<MaintenanceCreateWithoutBlockInput>;

  @Field(() => [MaintenanceCreateOrConnectWithoutBlockInput], {
    nullable: true,
  })
  @Type(() => MaintenanceCreateOrConnectWithoutBlockInput)
  connectOrCreate?: Array<MaintenanceCreateOrConnectWithoutBlockInput>;

  @Field(() => MaintenanceCreateManyBlockInputEnvelope, { nullable: true })
  @Type(() => MaintenanceCreateManyBlockInputEnvelope)
  createMany?: MaintenanceCreateManyBlockInputEnvelope;

  @Field(() => [MaintenanceWhereUniqueInput], { nullable: true })
  @Type(() => MaintenanceWhereUniqueInput)
  connect?: Array<MaintenanceWhereUniqueInput>;
}
