import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateManyItemsInput } from './machines-create-many-items.input';
import { Type } from 'class-transformer';

@InputType()
export class MachinesCreateManyItemsInputEnvelope {

    @Field(() => [MachinesCreateManyItemsInput], {nullable:false})
    @Type(() => MachinesCreateManyItemsInput)
    data!: Array<MachinesCreateManyItemsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
