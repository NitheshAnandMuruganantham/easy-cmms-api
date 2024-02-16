import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaintenanceCreateInput } from './maintenance-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMaintenanceArgs {
  @Field(() => MaintenanceCreateInput, { nullable: false })
  @Type(() => MaintenanceCreateInput)
  data!: MaintenanceCreateInput;
}
