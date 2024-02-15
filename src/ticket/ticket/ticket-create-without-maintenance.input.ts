import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { ticket_status } from '../../common-dto/prisma/ticket-status.enum';
import { UsersCreateNestedOneWithoutTicketInput } from '../../users/users/users-create-nested-one-without-ticket.input';
import { HideField } from '@nestjs/graphql';
import { MachinesCreateNestedOneWithoutTicketInput } from '../../machines/machines/machines-create-nested-one-without-ticket.input';
import { BlockCreateNestedOneWithoutTicketInput } from '../../block/block/block-create-nested-one-without-ticket.input';

@InputType()
export class TicketCreateWithoutMaintenanceInput {
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

  @HideField()
  user!: UsersCreateNestedOneWithoutTicketInput;

  @Field(() => MachinesCreateNestedOneWithoutTicketInput, { nullable: false })
  machines!: MachinesCreateNestedOneWithoutTicketInput;

  @HideField()
  block!: BlockCreateNestedOneWithoutTicketInput;
}
