import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionUpdateWithoutMachinesInput } from './section-update-without-machines.input';
import { Type } from 'class-transformer';
import { SectionCreateWithoutMachinesInput } from './section-create-without-machines.input';

@InputType()
export class SectionUpsertWithoutMachinesInput {

    @Field(() => SectionUpdateWithoutMachinesInput, {nullable:false})
    @Type(() => SectionUpdateWithoutMachinesInput)
    update!: SectionUpdateWithoutMachinesInput;

    @Field(() => SectionCreateWithoutMachinesInput, {nullable:false})
    @Type(() => SectionCreateWithoutMachinesInput)
    create!: SectionCreateWithoutMachinesInput;
}
