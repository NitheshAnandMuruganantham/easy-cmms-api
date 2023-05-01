import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InvoicesCreateManyBlockInput } from './invoices-create-many-block.input';
import { Type } from 'class-transformer';

@InputType()
export class InvoicesCreateManyBlockInputEnvelope {

    @Field(() => [InvoicesCreateManyBlockInput], {nullable:false})
    @Type(() => InvoicesCreateManyBlockInput)
    data!: Array<InvoicesCreateManyBlockInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
