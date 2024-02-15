import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReplacementsCreateManyInput } from './replacements-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyReplacementsArgs {

    @Field(() => [ReplacementsCreateManyInput], {nullable:false})
    @Type(() => ReplacementsCreateManyInput)
    data!: Array<ReplacementsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
