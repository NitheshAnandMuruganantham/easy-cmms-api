import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { Type } from 'class-transformer';
import { TicketUpdateWithoutBlockInput } from './ticket-update-without-block.input';
import { TicketCreateWithoutBlockInput } from './ticket-create-without-block.input';

@InputType()
export class TicketUpsertWithWhereUniqueWithoutBlockInput {
  @Field(() => TicketWhereUniqueInput, { nullable: false })
  @Type(() => TicketWhereUniqueInput)
  where!: TicketWhereUniqueInput;

  @Field(() => TicketUpdateWithoutBlockInput, { nullable: false })
  @Type(() => TicketUpdateWithoutBlockInput)
  update!: TicketUpdateWithoutBlockInput;

  @Field(() => TicketCreateWithoutBlockInput, { nullable: false })
  @Type(() => TicketCreateWithoutBlockInput)
  create!: TicketCreateWithoutBlockInput;
}
