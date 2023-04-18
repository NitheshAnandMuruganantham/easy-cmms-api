import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machines_itemsWhereUniqueInput } from './machines-items-where-unique.input';
import { Type } from 'class-transformer';
import { machines_itemsUpdateWithoutBlockInput } from './machines-items-update-without-block.input';

@InputType()
export class machines_itemsUpdateWithWhereUniqueWithoutBlockInput {

    @Field(() => machines_itemsWhereUniqueInput, {nullable:false})
    @Type(() => machines_itemsWhereUniqueInput)
    where!: machines_itemsWhereUniqueInput;

    @Field(() => machines_itemsUpdateWithoutBlockInput, {nullable:false})
    @Type(() => machines_itemsUpdateWithoutBlockInput)
    data!: machines_itemsUpdateWithoutBlockInput;
}
