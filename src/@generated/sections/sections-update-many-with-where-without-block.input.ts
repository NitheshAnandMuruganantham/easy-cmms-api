import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionsScalarWhereInput } from './sections-scalar-where.input';
import { Type } from 'class-transformer';
import { SectionsUpdateManyMutationInput } from './sections-update-many-mutation.input';

@InputType()
export class SectionsUpdateManyWithWhereWithoutBlockInput {

    @Field(() => SectionsScalarWhereInput, {nullable:false})
    @Type(() => SectionsScalarWhereInput)
    where!: SectionsScalarWhereInput;

    @Field(() => SectionsUpdateManyMutationInput, {nullable:false})
    @Type(() => SectionsUpdateManyMutationInput)
    data!: SectionsUpdateManyMutationInput;
}
