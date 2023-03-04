import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockUpdateWithoutMachinesInput } from './block-update-without-machines.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutMachinesInput } from './block-create-without-machines.input';

@InputType()
export class BlockUpsertWithoutMachinesInput {

    @Field(() => BlockUpdateWithoutMachinesInput, {nullable:false})
    @Type(() => BlockUpdateWithoutMachinesInput)
    update!: BlockUpdateWithoutMachinesInput;

    @Field(() => BlockCreateWithoutMachinesInput, {nullable:false})
    @Type(() => BlockCreateWithoutMachinesInput)
    create!: BlockCreateWithoutMachinesInput;
}
