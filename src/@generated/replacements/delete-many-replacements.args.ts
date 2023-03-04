import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplacementsWhereInput } from './replacements-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyReplacementsArgs {

    @Field(() => ReplacementsWhereInput, {nullable:true})
    @Type(() => ReplacementsWhereInput)
    where?: ReplacementsWhereInput;
}
