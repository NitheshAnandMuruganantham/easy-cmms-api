import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaintenanceUpdateInput } from './maintenance-update.input';
import { Type } from 'class-transformer';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';

@ArgsType()
export class UpdateOneMaintenanceArgs {
  @Field(() => MaintenanceUpdateInput, { nullable: false })
  @Type(() => MaintenanceUpdateInput)
  data!: MaintenanceUpdateInput;

  @Field(() => MaintenanceWhereUniqueInput, { nullable: false })
  @Type(() => MaintenanceWhereUniqueInput)
  where!: MaintenanceWhereUniqueInput;
}
