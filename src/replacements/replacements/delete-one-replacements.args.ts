import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplacementsWhereUniqueInput } from './replacements-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneReplacementsArgs {

    @Field(() => ReplacementsWhereUniqueInput, {nullable:false})
    @Type(() => ReplacementsWhereUniqueInput)
    where!: ReplacementsWhereUniqueInput;
}
