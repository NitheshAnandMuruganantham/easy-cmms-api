import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class InvoicesCount {

    @Field(() => Int, {nullable:false})
    invoice_items?: number;
}
