import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplacementsScalarWhereInput } from './replacements-scalar-where.input';
import { Type } from 'class-transformer';
import { ReplacementsUpdateManyMutationInput } from './replacements-update-many-mutation.input';

@InputType()
export class ReplacementsUpdateManyWithWhereWithoutItemsInput {

    @Field(() => ReplacementsScalarWhereInput, {nullable:false})
    @Type(() => ReplacementsScalarWhereInput)
    where!: ReplacementsScalarWhereInput;

    @Field(() => ReplacementsUpdateManyMutationInput, {nullable:false})
    @Type(() => ReplacementsUpdateManyMutationInput)
    data!: ReplacementsUpdateManyMutationInput;
}
