import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplacementsUpdateManyMutationInput } from './replacements-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ReplacementsWhereInput } from './replacements-where.input';

@ArgsType()
export class UpdateManyReplacementsArgs {

    @Field(() => ReplacementsUpdateManyMutationInput, {nullable:false})
    @Type(() => ReplacementsUpdateManyMutationInput)
    data!: ReplacementsUpdateManyMutationInput;

    @Field(() => ReplacementsWhereInput, {nullable:true})
    @Type(() => ReplacementsWhereInput)
    where?: ReplacementsWhereInput;
}
