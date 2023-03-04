import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TicketCreateManyInput } from './ticket-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTicketArgs {

    @Field(() => [TicketCreateManyInput], {nullable:false})
    @Type(() => TicketCreateManyInput)
    data!: Array<TicketCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
