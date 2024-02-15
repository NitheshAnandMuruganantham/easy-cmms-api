import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machines_itemsCreateManyItemsInput } from './machines-items-create-many-items.input';
import { Type } from 'class-transformer';

@InputType()
export class machines_itemsCreateManyItemsInputEnvelope {

    @Field(() => [machines_itemsCreateManyItemsInput], {nullable:false})
    @Type(() => machines_itemsCreateManyItemsInput)
    data!: Array<machines_itemsCreateManyItemsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
