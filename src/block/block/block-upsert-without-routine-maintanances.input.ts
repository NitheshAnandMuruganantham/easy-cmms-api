import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockUpdateWithoutRoutine_maintanancesInput } from './block-update-without-routine-maintanances.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutRoutine_maintanancesInput } from './block-create-without-routine-maintanances.input';

@InputType()
export class BlockUpsertWithoutRoutine_maintanancesInput {

    @Field(() => BlockUpdateWithoutRoutine_maintanancesInput, {nullable:false})
    @Type(() => BlockUpdateWithoutRoutine_maintanancesInput)
    update!: BlockUpdateWithoutRoutine_maintanancesInput;

    @Field(() => BlockCreateWithoutRoutine_maintanancesInput, {nullable:false})
    @Type(() => BlockCreateWithoutRoutine_maintanancesInput)
    create!: BlockCreateWithoutRoutine_maintanancesInput;
}
