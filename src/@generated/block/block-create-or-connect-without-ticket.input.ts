import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutTicketInput } from './block-create-without-ticket.input';

@InputType()
export class BlockCreateOrConnectWithoutTicketInput {

    @Field(() => BlockWhereUniqueInput, {nullable:false})
    @Type(() => BlockWhereUniqueInput)
    where!: BlockWhereUniqueInput;

    @Field(() => BlockCreateWithoutTicketInput, {nullable:false})
    @Type(() => BlockCreateWithoutTicketInput)
    create!: BlockCreateWithoutTicketInput;
}
