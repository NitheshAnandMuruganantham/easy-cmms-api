import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueTicketOrThrowArgs {
  @Field(() => TicketWhereUniqueInput, { nullable: false })
  @Type(() => TicketWhereUniqueInput)
  where!: TicketWhereUniqueInput;
}
