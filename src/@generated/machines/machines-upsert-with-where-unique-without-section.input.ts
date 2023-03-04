import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { MachinesUpdateWithoutSectionInput } from './machines-update-without-section.input';
import { MachinesCreateWithoutSectionInput } from './machines-create-without-section.input';

@InputType()
export class MachinesUpsertWithWhereUniqueWithoutSectionInput {

    @Field(() => MachinesWhereUniqueInput, {nullable:false})
    @Type(() => MachinesWhereUniqueInput)
    where!: MachinesWhereUniqueInput;

    @Field(() => MachinesUpdateWithoutSectionInput, {nullable:false})
    @Type(() => MachinesUpdateWithoutSectionInput)
    update!: MachinesUpdateWithoutSectionInput;

    @Field(() => MachinesCreateWithoutSectionInput, {nullable:false})
    @Type(() => MachinesCreateWithoutSectionInput)
    create!: MachinesCreateWithoutSectionInput;
}
