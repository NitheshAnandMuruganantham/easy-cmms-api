import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplacementsWhereUniqueInput } from './replacements-where-unique.input';
import { Type } from 'class-transformer';
import { ReplacementsUpdateWithoutItemsInput } from './replacements-update-without-items.input';

@InputType()
export class ReplacementsUpdateWithWhereUniqueWithoutItemsInput {

    @Field(() => ReplacementsWhereUniqueInput, {nullable:false})
    @Type(() => ReplacementsWhereUniqueInput)
    where!: ReplacementsWhereUniqueInput;

    @Field(() => ReplacementsUpdateWithoutItemsInput, {nullable:false})
    @Type(() => ReplacementsUpdateWithoutItemsInput)
    data!: ReplacementsUpdateWithoutItemsInput;
}
