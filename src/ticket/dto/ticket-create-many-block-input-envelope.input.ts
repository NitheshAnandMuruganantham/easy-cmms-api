import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketCreateManyBlockInput } from './ticket-create-many-block.input';
import { Type } from 'class-transformer';

@InputType()
export class TicketCreateManyBlockInputEnvelope {
  @Field(() => [TicketCreateManyBlockInput], { nullable: false })
  @Type(() => TicketCreateManyBlockInput)
  data!: Array<TicketCreateManyBlockInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
