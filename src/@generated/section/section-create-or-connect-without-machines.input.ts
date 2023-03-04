import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { Type } from 'class-transformer';
import { SectionCreateWithoutMachinesInput } from './section-create-without-machines.input';

@InputType()
export class SectionCreateOrConnectWithoutMachinesInput {

    @Field(() => SectionWhereUniqueInput, {nullable:false})
    @Type(() => SectionWhereUniqueInput)
    where!: SectionWhereUniqueInput;

    @Field(() => SectionCreateWithoutMachinesInput, {nullable:false})
    @Type(() => SectionCreateWithoutMachinesInput)
    create!: SectionCreateWithoutMachinesInput;
}
