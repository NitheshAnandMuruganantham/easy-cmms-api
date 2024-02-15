import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';
import { Type } from 'class-transformer';
import { MaintenanceUpdateWithoutMachinesInput } from './maintenance-update-without-machines.input';
import { MaintenanceCreateWithoutMachinesInput } from './maintenance-create-without-machines.input';

@InputType()
export class MaintenanceUpsertWithWhereUniqueWithoutMachinesInput {
  @Field(() => MaintenanceWhereUniqueInput, { nullable: false })
  @Type(() => MaintenanceWhereUniqueInput)
  where!: MaintenanceWhereUniqueInput;

  @Field(() => MaintenanceUpdateWithoutMachinesInput, { nullable: false })
  @Type(() => MaintenanceUpdateWithoutMachinesInput)
  update!: MaintenanceUpdateWithoutMachinesInput;

  @Field(() => MaintenanceCreateWithoutMachinesInput, { nullable: false })
  @Type(() => MaintenanceCreateWithoutMachinesInput)
  create!: MaintenanceCreateWithoutMachinesInput;
}
