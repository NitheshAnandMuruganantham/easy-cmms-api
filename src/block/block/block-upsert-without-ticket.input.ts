import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockUpdateWithoutTicketInput } from './block-update-without-ticket.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutTicketInput } from './block-create-without-ticket.input';

@InputType()
export class BlockUpsertWithoutTicketInput {

    @Field(() => BlockUpdateWithoutTicketInput, {nullable:false})
    @Type(() => BlockUpdateWithoutTicketInput)
    update!: BlockUpdateWithoutTicketInput;

    @Field(() => BlockCreateWithoutTicketInput, {nullable:false})
    @Type(() => BlockCreateWithoutTicketInput)
    create!: BlockCreateWithoutTicketInput;
}
