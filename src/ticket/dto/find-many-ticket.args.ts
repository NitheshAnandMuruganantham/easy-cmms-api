import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketWhereInput } from './ticket-where.input';
import { Type } from 'class-transformer';
import { TicketOrderByWithRelationAndSearchRelevanceInput } from './ticket-order-by-with-relation-and-search-relevance.input';
import { TicketWhereUniqueInput } from './ticket-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TicketScalarFieldEnum } from './ticket-scalar-field.enum';

@ArgsType()
export class FindManyTicketArgs {
  @Field(() => TicketWhereInput, { nullable: true })
  @Type(() => TicketWhereInput)
  where?: TicketWhereInput;

  @Field(() => [TicketOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<TicketOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => TicketWhereUniqueInput, { nullable: true })
  cursor?: TicketWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [TicketScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof TicketScalarFieldEnum>;
}
