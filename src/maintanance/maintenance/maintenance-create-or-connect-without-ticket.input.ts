import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateWithoutTicketInput } from './maintenance-create-without-ticket.input';

@InputType()
export class MaintenanceCreateOrConnectWithoutTicketInput {
  @Field(() => MaintenanceWhereUniqueInput, { nullable: false })
  @Type(() => MaintenanceWhereUniqueInput)
  where!: MaintenanceWhereUniqueInput;

  @Field(() => MaintenanceCreateWithoutTicketInput, { nullable: false })
  @Type(() => MaintenanceCreateWithoutTicketInput)
  create!: MaintenanceCreateWithoutTicketInput;
}
