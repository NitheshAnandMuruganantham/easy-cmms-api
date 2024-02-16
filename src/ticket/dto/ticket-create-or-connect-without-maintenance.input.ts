import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { Type } from 'class-transformer';
import { TicketCreateWithoutMaintenanceInput } from './ticket-create-without-maintenance.input';

@InputType()
export class TicketCreateOrConnectWithoutMaintenanceInput {
  @Field(() => TicketWhereUniqueInput, { nullable: false })
  @Type(() => TicketWhereUniqueInput)
  where!: TicketWhereUniqueInput;

  @Field(() => TicketCreateWithoutMaintenanceInput, { nullable: false })
  @Type(() => TicketCreateWithoutMaintenanceInput)
  create!: TicketCreateWithoutMaintenanceInput;
}
