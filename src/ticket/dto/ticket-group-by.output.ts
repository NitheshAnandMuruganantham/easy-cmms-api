import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { GraphQLBigInt } from 'graphql-scalars';
import { ticket_status } from '../../common-dto/prisma/ticket-status.enum';
import { TicketCountAggregate } from './ticket-count-aggregate.output';
import { TicketAvgAggregate } from './ticket-avg-aggregate.output';
import { TicketSumAggregate } from './ticket-sum-aggregate.output';
import { TicketMinAggregate } from './ticket-min-aggregate.output';
import { TicketMaxAggregate } from './ticket-max-aggregate.output';

@ObjectType()
export class TicketGroupBy {
  @Field(() => Scalars.GraphQLBigInt, { nullable: false })
  id!: bigint | number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => String, { nullable: false })
  photos!: string;

  @Field(() => GraphQLBigInt, { nullable: false })
  user_id!: bigint | number;

  @Field(() => GraphQLBigInt, { nullable: true })
  maintenance_id?: bigint | number;

  @Field(() => GraphQLBigInt, { nullable: false })
  machine_id!: bigint | number;

  @Field(() => ticket_status, { nullable: false })
  status!: keyof typeof ticket_status;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: false })
  updated_at!: Date | string;

  @Field(() => GraphQLBigInt, { nullable: false })
  block_id!: bigint | number;

  @Field(() => TicketCountAggregate, { nullable: true })
  _count?: TicketCountAggregate;

  @Field(() => TicketAvgAggregate, { nullable: true })
  _avg?: TicketAvgAggregate;

  @Field(() => TicketSumAggregate, { nullable: true })
  _sum?: TicketSumAggregate;

  @Field(() => TicketMinAggregate, { nullable: true })
  _min?: TicketMinAggregate;

  @Field(() => TicketMaxAggregate, { nullable: true })
  _max?: TicketMaxAggregate;
}
