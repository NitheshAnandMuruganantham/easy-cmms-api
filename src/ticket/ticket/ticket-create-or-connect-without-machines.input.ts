import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { Type } from 'class-transformer';
import { TicketCreateWithoutMachinesInput } from './ticket-create-without-machines.input';

@InputType()
export class TicketCreateOrConnectWithoutMachinesInput {
  @Field(() => TicketWhereUniqueInput, { nullable: false })
  @Type(() => TicketWhereUniqueInput)
  where!: TicketWhereUniqueInput;

  @Field(() => TicketCreateWithoutMachinesInput, { nullable: false })
  @Type(() => TicketCreateWithoutMachinesInput)
  create!: TicketCreateWithoutMachinesInput;
}
