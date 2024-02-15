import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ticket_status } from './ticket-status.enum';

@InputType()
export class Enumticket_statusFieldUpdateOperationsInput {

    @Field(() => ticket_status, {nullable:true})
    set?: keyof typeof ticket_status;
}
