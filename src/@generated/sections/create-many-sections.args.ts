import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionsCreateManyInput } from './sections-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySectionsArgs {

    @Field(() => [SectionsCreateManyInput], {nullable:false})
    @Type(() => SectionsCreateManyInput)
    data!: Array<SectionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
