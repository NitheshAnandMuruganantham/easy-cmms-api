import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceUpdateWithoutTicketInput } from './maintenance-update-without-ticket.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateWithoutTicketInput } from './maintenance-create-without-ticket.input';

@InputType()
export class MaintenanceUpsertWithoutTicketInput {
  @Field(() => MaintenanceUpdateWithoutTicketInput, { nullable: false })
  @Type(() => MaintenanceUpdateWithoutTicketInput)
  update!: MaintenanceUpdateWithoutTicketInput;

  @Field(() => MaintenanceCreateWithoutTicketInput, { nullable: false })
  @Type(() => MaintenanceCreateWithoutTicketInput)
  create!: MaintenanceCreateWithoutTicketInput;
}
