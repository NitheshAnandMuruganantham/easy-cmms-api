import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machines_itemsWhereUniqueInput } from '../machines-items/machines-items-where-unique.input';
import { Type } from 'class-transformer';
import { machines_itemsCreateInput } from '../machines-items/machines-items-create.input';
import { machines_itemsUpdateInput } from '../machines-items/machines-items-update.input';

@ArgsType()
export class UpsertOnemachinesItemsArgs {

    @Field(() => machines_itemsWhereUniqueInput, {nullable:false})
    @Type(() => machines_itemsWhereUniqueInput)
    where!: machines_itemsWhereUniqueInput;

    @Field(() => machines_itemsCreateInput, {nullable:false})
    @Type(() => machines_itemsCreateInput)
    create!: machines_itemsCreateInput;

    @Field(() => machines_itemsUpdateInput, {nullable:false})
    @Type(() => machines_itemsUpdateInput)
    update!: machines_itemsUpdateInput;
}
