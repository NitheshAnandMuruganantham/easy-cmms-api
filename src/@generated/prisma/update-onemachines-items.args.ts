import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machines_itemsUpdateInput } from '../machines-items/machines-items-update.input';
import { Type } from 'class-transformer';
import { machines_itemsWhereUniqueInput } from '../machines-items/machines-items-where-unique.input';

@ArgsType()
export class UpdateOnemachinesItemsArgs {

    @Field(() => machines_itemsUpdateInput, {nullable:false})
    @Type(() => machines_itemsUpdateInput)
    data!: machines_itemsUpdateInput;

    @Field(() => machines_itemsWhereUniqueInput, {nullable:false})
    @Type(() => machines_itemsWhereUniqueInput)
    where!: machines_itemsWhereUniqueInput;
}
