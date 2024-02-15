import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionsCreateInput } from './sections-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSectionsArgs {

    @Field(() => SectionsCreateInput, {nullable:false})
    @Type(() => SectionsCreateInput)
    data!: SectionsCreateInput;
}
