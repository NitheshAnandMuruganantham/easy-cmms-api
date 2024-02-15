import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionUpdateManyMutationInput } from './section-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SectionWhereInput } from './section-where.input';

@ArgsType()
export class UpdateManySectionArgs {

    @Field(() => SectionUpdateManyMutationInput, {nullable:false})
    @Type(() => SectionUpdateManyMutationInput)
    data!: SectionUpdateManyMutationInput;

    @Field(() => SectionWhereInput, {nullable:true})
    @Type(() => SectionWhereInput)
    where?: SectionWhereInput;
}
