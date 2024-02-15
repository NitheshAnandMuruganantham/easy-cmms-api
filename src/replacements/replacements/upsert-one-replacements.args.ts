import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplacementsWhereUniqueInput } from './replacements-where-unique.input';
import { Type } from 'class-transformer';
import { ReplacementsCreateInput } from './replacements-create.input';
import { ReplacementsUpdateInput } from './replacements-update.input';

@ArgsType()
export class UpsertOneReplacementsArgs {

    @Field(() => ReplacementsWhereUniqueInput, {nullable:false})
    @Type(() => ReplacementsWhereUniqueInput)
    where!: ReplacementsWhereUniqueInput;

    @Field(() => ReplacementsCreateInput, {nullable:false})
    @Type(() => ReplacementsCreateInput)
    create!: ReplacementsCreateInput;

    @Field(() => ReplacementsUpdateInput, {nullable:false})
    @Type(() => ReplacementsUpdateInput)
    update!: ReplacementsUpdateInput;
}
