import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TicketScalarWhereInput } from './ticket-scalar-where.input';
import { Type } from 'class-transformer';
import { TicketUpdateManyMutationInput } from './ticket-update-many-mutation.input';

@InputType()
export class TicketUpdateManyWithWhereWithoutUserInput {

    @Field(() => TicketScalarWhereInput, {nullable:false})
    @Type(() => TicketScalarWhereInput)
    where!: TicketScalarWhereInput;

    @Field(() => TicketUpdateManyMutationInput, {nullable:false})
    @Type(() => TicketUpdateManyMutationInput)
    data!: TicketUpdateManyMutationInput;
}
