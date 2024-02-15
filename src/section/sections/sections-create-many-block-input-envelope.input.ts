import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionsCreateManyBlockInput } from './sections-create-many-block.input';
import { Type } from 'class-transformer';

@InputType()
export class SectionsCreateManyBlockInputEnvelope {

    @Field(() => [SectionsCreateManyBlockInput], {nullable:false})
    @Type(() => SectionsCreateManyBlockInput)
    data!: Array<SectionsCreateManyBlockInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
