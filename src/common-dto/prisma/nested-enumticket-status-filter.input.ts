import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ticket_status } from './ticket-status.enum';

@InputType()
export class NestedEnumticket_statusFilter {
  @Field(() => ticket_status, { nullable: true })
  equals?: keyof typeof ticket_status;

  @Field(() => [ticket_status], { nullable: true })
  in?: Array<keyof typeof ticket_status>;

  @Field(() => [ticket_status], { nullable: true })
  notIn?: Array<keyof typeof ticket_status>;

  @Field(() => NestedEnumticket_statusFilter, { nullable: true })
  not?: NestedEnumticket_statusFilter;
}
