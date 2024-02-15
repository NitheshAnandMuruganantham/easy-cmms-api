import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machines_itemsCreateManyMachineInput } from './machines-items-create-many-machine.input';
import { Type } from 'class-transformer';

@InputType()
export class machines_itemsCreateManyMachineInputEnvelope {

    @Field(() => [machines_itemsCreateManyMachineInput], {nullable:false})
    @Type(() => machines_itemsCreateManyMachineInput)
    data!: Array<machines_itemsCreateManyMachineInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
