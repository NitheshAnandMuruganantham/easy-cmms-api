import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionsCreateWithoutMachinesInput } from './sections-create-without-machines.input';
import { Type } from 'class-transformer';
import { SectionsCreateOrConnectWithoutMachinesInput } from './sections-create-or-connect-without-machines.input';
import { SectionsUpsertWithoutMachinesInput } from './sections-upsert-without-machines.input';
import { SectionsWhereUniqueInput } from './sections-where-unique.input';
import { SectionsUpdateWithoutMachinesInput } from './sections-update-without-machines.input';

@InputType()
export class SectionsUpdateOneRequiredWithoutMachinesNestedInput {

    @Field(() => SectionsCreateWithoutMachinesInput, {nullable:true})
    @Type(() => SectionsCreateWithoutMachinesInput)
    create?: SectionsCreateWithoutMachinesInput;

    @Field(() => SectionsCreateOrConnectWithoutMachinesInput, {nullable:true})
    @Type(() => SectionsCreateOrConnectWithoutMachinesInput)
    connectOrCreate?: SectionsCreateOrConnectWithoutMachinesInput;

    @Field(() => SectionsUpsertWithoutMachinesInput, {nullable:true})
    @Type(() => SectionsUpsertWithoutMachinesInput)
    upsert?: SectionsUpsertWithoutMachinesInput;

    @Field(() => SectionsWhereUniqueInput, {nullable:true})
    @Type(() => SectionsWhereUniqueInput)
    connect?: SectionsWhereUniqueInput;

    @Field(() => SectionsUpdateWithoutMachinesInput, {nullable:true})
    @Type(() => SectionsUpdateWithoutMachinesInput)
    update?: SectionsUpdateWithoutMachinesInput;
}
