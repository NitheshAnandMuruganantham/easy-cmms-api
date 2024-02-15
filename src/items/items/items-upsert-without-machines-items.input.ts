import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsUpdateWithoutMachines_itemsInput } from './items-update-without-machines-items.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutMachines_itemsInput } from './items-create-without-machines-items.input';

@InputType()
export class ItemsUpsertWithoutMachines_itemsInput {

    @Field(() => ItemsUpdateWithoutMachines_itemsInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutMachines_itemsInput)
    update!: ItemsUpdateWithoutMachines_itemsInput;

    @Field(() => ItemsCreateWithoutMachines_itemsInput, {nullable:false})
    @Type(() => ItemsCreateWithoutMachines_itemsInput)
    create!: ItemsCreateWithoutMachines_itemsInput;
}
