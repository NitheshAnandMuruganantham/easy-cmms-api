import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateWithoutMachines_itemsInput } from './items-create-without-machines-items.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutMachines_itemsInput } from './items-create-or-connect-without-machines-items.input';
import { ItemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class ItemsCreateNestedOneWithoutMachines_itemsInput {

    @Field(() => ItemsCreateWithoutMachines_itemsInput, {nullable:true})
    @Type(() => ItemsCreateWithoutMachines_itemsInput)
    create?: ItemsCreateWithoutMachines_itemsInput;

    @Field(() => ItemsCreateOrConnectWithoutMachines_itemsInput, {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutMachines_itemsInput)
    connectOrCreate?: ItemsCreateOrConnectWithoutMachines_itemsInput;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: ItemsWhereUniqueInput;
}
