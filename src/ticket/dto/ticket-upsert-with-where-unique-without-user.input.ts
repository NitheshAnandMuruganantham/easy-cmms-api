import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { Type } from 'class-transformer';
import { TicketUpdateWithoutUserInput } from './ticket-update-without-user.input';
import { TicketCreateWithoutUserInput } from './ticket-create-without-user.input';

@InputType()
export class TicketUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => TicketWhereUniqueInput, { nullable: false })
  @Type(() => TicketWhereUniqueInput)
  where!: TicketWhereUniqueInput;

  @Field(() => TicketUpdateWithoutUserInput, { nullable: false })
  @Type(() => TicketUpdateWithoutUserInput)
  update!: TicketUpdateWithoutUserInput;

  @Field(() => TicketCreateWithoutUserInput, { nullable: false })
  @Type(() => TicketCreateWithoutUserInput)
  create!: TicketCreateWithoutUserInput;
}
