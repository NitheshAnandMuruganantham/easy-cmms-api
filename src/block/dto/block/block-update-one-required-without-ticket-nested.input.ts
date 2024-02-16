import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutTicketInput } from './block-create-without-ticket.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutTicketInput } from './block-create-or-connect-without-ticket.input';
import { BlockUpsertWithoutTicketInput } from './block-upsert-without-ticket.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { BlockUpdateWithoutTicketInput } from './block-update-without-ticket.input';

@InputType()
export class BlockUpdateOneRequiredWithoutTicketNestedInput {
  @Field(() => BlockCreateWithoutTicketInput, { nullable: true })
  @Type(() => BlockCreateWithoutTicketInput)
  create?: BlockCreateWithoutTicketInput;

  @Field(() => BlockCreateOrConnectWithoutTicketInput, { nullable: true })
  @Type(() => BlockCreateOrConnectWithoutTicketInput)
  connectOrCreate?: BlockCreateOrConnectWithoutTicketInput;

  @Field(() => BlockUpsertWithoutTicketInput, { nullable: true })
  @Type(() => BlockUpsertWithoutTicketInput)
  upsert?: BlockUpsertWithoutTicketInput;

  @Field(() => BlockWhereUniqueInput, { nullable: true })
  @Type(() => BlockWhereUniqueInput)
  connect?: BlockWhereUniqueInput;

  @Field(() => BlockUpdateWithoutTicketInput, { nullable: true })
  @Type(() => BlockUpdateWithoutTicketInput)
  update?: BlockUpdateWithoutTicketInput;
}
