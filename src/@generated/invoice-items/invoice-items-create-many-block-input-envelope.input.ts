import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoice_itemsCreateManyBlockInput } from './invoice-items-create-many-block.input';
import { Type } from 'class-transformer';

@InputType()
export class invoice_itemsCreateManyBlockInputEnvelope {

    @Field(() => [invoice_itemsCreateManyBlockInput], {nullable:false})
    @Type(() => invoice_itemsCreateManyBlockInput)
    data!: Array<invoice_itemsCreateManyBlockInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
