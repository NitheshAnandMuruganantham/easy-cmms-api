import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { Type } from 'class-transformer';
import { TicketCreateWithoutBlockInput } from './ticket-create-without-block.input';

@InputType()
export class TicketCreateOrConnectWithoutBlockInput {
  @Field(() => TicketWhereUniqueInput, { nullable: false })
  @Type(() => TicketWhereUniqueInput)
  where!: TicketWhereUniqueInput;

  @Field(() => TicketCreateWithoutBlockInput, { nullable: false })
  @Type(() => TicketCreateWithoutBlockInput)
  create!: TicketCreateWithoutBlockInput;
}
