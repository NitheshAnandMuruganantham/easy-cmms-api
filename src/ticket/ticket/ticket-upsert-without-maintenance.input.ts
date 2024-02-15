import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketUpdateWithoutMaintenanceInput } from './ticket-update-without-maintenance.input';
import { Type } from 'class-transformer';
import { TicketCreateWithoutMaintenanceInput } from './ticket-create-without-maintenance.input';

@InputType()
export class TicketUpsertWithoutMaintenanceInput {
  @Field(() => TicketUpdateWithoutMaintenanceInput, { nullable: false })
  @Type(() => TicketUpdateWithoutMaintenanceInput)
  update!: TicketUpdateWithoutMaintenanceInput;

  @Field(() => TicketCreateWithoutMaintenanceInput, { nullable: false })
  @Type(() => TicketCreateWithoutMaintenanceInput)
  create!: TicketCreateWithoutMaintenanceInput;
}
