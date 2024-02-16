import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutTicketInput } from './block-create-without-ticket.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutTicketInput } from './block-create-or-connect-without-ticket.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';

@InputType()
export class BlockCreateNestedOneWithoutTicketInput {
  @Field(() => BlockCreateWithoutTicketInput, { nullable: true })
  @Type(() => BlockCreateWithoutTicketInput)
  create?: BlockCreateWithoutTicketInput;

  @Field(() => BlockCreateOrConnectWithoutTicketInput, { nullable: true })
  @Type(() => BlockCreateOrConnectWithoutTicketInput)
  connectOrCreate?: BlockCreateOrConnectWithoutTicketInput;

  @Field(() => BlockWhereUniqueInput, { nullable: true })
  @Type(() => BlockWhereUniqueInput)
  connect?: BlockWhereUniqueInput;
}
