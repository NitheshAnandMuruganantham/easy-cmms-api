import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionsWhereUniqueInput } from './sections-where-unique.input';
import { Type } from 'class-transformer';
import { SectionsUpdateWithoutBlockInput } from './sections-update-without-block.input';
import { SectionsCreateWithoutBlockInput } from './sections-create-without-block.input';

@InputType()
export class SectionsUpsertWithWhereUniqueWithoutBlockInput {

    @Field(() => SectionsWhereUniqueInput, {nullable:false})
    @Type(() => SectionsWhereUniqueInput)
    where!: SectionsWhereUniqueInput;

    @Field(() => SectionsUpdateWithoutBlockInput, {nullable:false})
    @Type(() => SectionsUpdateWithoutBlockInput)
    update!: SectionsUpdateWithoutBlockInput;

    @Field(() => SectionsCreateWithoutBlockInput, {nullable:false})
    @Type(() => SectionsCreateWithoutBlockInput)
    create!: SectionsCreateWithoutBlockInput;
}
