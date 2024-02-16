import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateWithoutMachinesInput } from './maintenance-create-without-machines.input';

@InputType()
export class MaintenanceCreateOrConnectWithoutMachinesInput {
  @Field(() => MaintenanceWhereUniqueInput, { nullable: false })
  @Type(() => MaintenanceWhereUniqueInput)
  where!: MaintenanceWhereUniqueInput;

  @Field(() => MaintenanceCreateWithoutMachinesInput, { nullable: false })
  @Type(() => MaintenanceCreateWithoutMachinesInput)
  create!: MaintenanceCreateWithoutMachinesInput;
}
