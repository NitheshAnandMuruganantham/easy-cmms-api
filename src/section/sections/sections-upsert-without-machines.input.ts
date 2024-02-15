import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionsUpdateWithoutMachinesInput } from './sections-update-without-machines.input';
import { Type } from 'class-transformer';
import { SectionsCreateWithoutMachinesInput } from './sections-create-without-machines.input';

@InputType()
export class SectionsUpsertWithoutMachinesInput {

    @Field(() => SectionsUpdateWithoutMachinesInput, {nullable:false})
    @Type(() => SectionsUpdateWithoutMachinesInput)
    update!: SectionsUpdateWithoutMachinesInput;

    @Field(() => SectionsCreateWithoutMachinesInput, {nullable:false})
    @Type(() => SectionsCreateWithoutMachinesInput)
    create!: SectionsCreateWithoutMachinesInput;
}
