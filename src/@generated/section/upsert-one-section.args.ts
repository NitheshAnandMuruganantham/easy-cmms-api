import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { Type } from 'class-transformer';
import { SectionCreateInput } from './section-create.input';
import { SectionUpdateInput } from './section-update.input';

@ArgsType()
export class UpsertOneSectionArgs {

    @Field(() => SectionWhereUniqueInput, {nullable:false})
    @Type(() => SectionWhereUniqueInput)
    where!: SectionWhereUniqueInput;

    @Field(() => SectionCreateInput, {nullable:false})
    @Type(() => SectionCreateInput)
    create!: SectionCreateInput;

    @Field(() => SectionUpdateInput, {nullable:false})
    @Type(() => SectionUpdateInput)
    update!: SectionUpdateInput;
}
