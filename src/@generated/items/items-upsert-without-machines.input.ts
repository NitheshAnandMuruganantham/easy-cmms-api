import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsUpdateWithoutMachinesInput } from './items-update-without-machines.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutMachinesInput } from './items-create-without-machines.input';

@InputType()
export class ItemsUpsertWithoutMachinesInput {

    @Field(() => ItemsUpdateWithoutMachinesInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutMachinesInput)
    update!: ItemsUpdateWithoutMachinesInput;

    @Field(() => ItemsCreateWithoutMachinesInput, {nullable:false})
    @Type(() => ItemsCreateWithoutMachinesInput)
    create!: ItemsCreateWithoutMachinesInput;
}
