import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionCreateManyInput } from './section-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySectionArgs {

    @Field(() => [SectionCreateManyInput], {nullable:false})
    @Type(() => SectionCreateManyInput)
    data!: Array<SectionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
