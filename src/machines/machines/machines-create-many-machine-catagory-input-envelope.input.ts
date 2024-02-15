import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateManyMachine_catagoryInput } from './machines-create-many-machine-catagory.input';
import { Type } from 'class-transformer';

@InputType()
export class MachinesCreateManyMachine_catagoryInputEnvelope {

    @Field(() => [MachinesCreateManyMachine_catagoryInput], {nullable:false})
    @Type(() => MachinesCreateManyMachine_catagoryInput)
    data!: Array<MachinesCreateManyMachine_catagoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
