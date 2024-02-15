import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCreateWithoutMaintenanceInput } from './ticket-create-without-maintenance.input';
import { Type } from 'class-transformer';
import { TicketCreateOrConnectWithoutMaintenanceInput } from './ticket-create-or-connect-without-maintenance.input';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';

@InputType()
export class TicketCreateNestedOneWithoutMaintenanceInput {
  @Field(() => TicketCreateWithoutMaintenanceInput, { nullable: true })
  @Type(() => TicketCreateWithoutMaintenanceInput)
  create?: TicketCreateWithoutMaintenanceInput;

  @Field(() => TicketCreateOrConnectWithoutMaintenanceInput, { nullable: true })
  @Type(() => TicketCreateOrConnectWithoutMaintenanceInput)
  connectOrCreate?: TicketCreateOrConnectWithoutMaintenanceInput;

  @Field(() => TicketWhereUniqueInput, { nullable: true })
  @Type(() => TicketWhereUniqueInput)
  connect?: TicketWhereUniqueInput;
}
