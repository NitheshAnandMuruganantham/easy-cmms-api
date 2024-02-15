import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { MachinesCreateWithoutTicketInput } from './machines-create-without-ticket.input';

@InputType()
export class MachinesCreateOrConnectWithoutTicketInput {
  @Field(() => MachinesWhereUniqueInput, { nullable: false })
  @Type(() => MachinesWhereUniqueInput)
  where!: MachinesWhereUniqueInput;

  @Field(() => MachinesCreateWithoutTicketInput, { nullable: false })
  @Type(() => MachinesCreateWithoutTicketInput)
  create!: MachinesCreateWithoutTicketInput;
}
