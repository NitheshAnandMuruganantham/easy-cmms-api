import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';
import { Type } from 'class-transformer';
import { MaintenanceUpdateWithoutAssigneeInput } from './maintenance-update-without-assignee.input';
import { MaintenanceCreateWithoutAssigneeInput } from './maintenance-create-without-assignee.input';

@InputType()
export class MaintenanceUpsertWithWhereUniqueWithoutAssigneeInput {
  @Field(() => MaintenanceWhereUniqueInput, { nullable: false })
  @Type(() => MaintenanceWhereUniqueInput)
  where!: MaintenanceWhereUniqueInput;

  @Field(() => MaintenanceUpdateWithoutAssigneeInput, { nullable: false })
  @Type(() => MaintenanceUpdateWithoutAssigneeInput)
  update!: MaintenanceUpdateWithoutAssigneeInput;

  @Field(() => MaintenanceCreateWithoutAssigneeInput, { nullable: false })
  @Type(() => MaintenanceCreateWithoutAssigneeInput)
  create!: MaintenanceCreateWithoutAssigneeInput;
}
