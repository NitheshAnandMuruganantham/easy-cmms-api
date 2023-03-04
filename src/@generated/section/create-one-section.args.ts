import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionCreateInput } from './section-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSectionArgs {

    @Field(() => SectionCreateInput, {nullable:false})
    @Type(() => SectionCreateInput)
    data!: SectionCreateInput;
}
