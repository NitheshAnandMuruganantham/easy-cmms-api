import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { invoice_itemsScalarWhereInput } from './invoice-items-scalar-where.input';
import { Type } from 'class-transformer';
import { invoice_itemsUpdateManyMutationInput } from './invoice-items-update-many-mutation.input';

@InputType()
export class invoice_itemsUpdateManyWithWhereWithoutBlockInput {

    @Field(() => invoice_itemsScalarWhereInput, {nullable:false})
    @Type(() => invoice_itemsScalarWhereInput)
    where!: invoice_itemsScalarWhereInput;

    @Field(() => invoice_itemsUpdateManyMutationInput, {nullable:false})
    @Type(() => invoice_itemsUpdateManyMutationInput)
    data!: invoice_itemsUpdateManyMutationInput;
}
