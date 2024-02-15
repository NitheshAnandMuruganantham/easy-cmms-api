import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionsWhereUniqueInput } from './sections-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueSectionsOrThrowArgs {

    @Field(() => SectionsWhereUniqueInput, {nullable:false})
    @Type(() => SectionsWhereUniqueInput)
    where!: SectionsWhereUniqueInput;
}
