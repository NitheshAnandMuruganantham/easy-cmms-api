import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { ticket_status } from '../../common-dto/prisma/ticket-status.enum';
import { MaintenanceCreateNestedOneWithoutTicketInput } from '../../maintanance/dto/maintenance-create-nested-one-without-ticket.input';
import { MachinesCreateNestedOneWithoutTicketInput } from '../../machines/dto/machines/machines-create-nested-one-without-ticket.input';
import { BlockCreateNestedOneWithoutTicketInput } from '../../block/dto/block/block-create-nested-one-without-ticket.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class TicketCreateWithoutUserInput {
  @Field(() => GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => String, { nullable: false })
  photos!: string;

  @Field(() => ticket_status, { nullable: false })
  status!: keyof typeof ticket_status;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => MaintenanceCreateNestedOneWithoutTicketInput, { nullable: true })
  maintenance?: MaintenanceCreateNestedOneWithoutTicketInput;

  @Field(() => MachinesCreateNestedOneWithoutTicketInput, { nullable: false })
  machines!: MachinesCreateNestedOneWithoutTicketInput;

  @HideField()
  block!: BlockCreateNestedOneWithoutTicketInput;
}
