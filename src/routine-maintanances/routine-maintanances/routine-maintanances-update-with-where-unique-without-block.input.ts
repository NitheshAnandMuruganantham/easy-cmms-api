import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { routine_maintanancesWhereUniqueInput } from './routine-maintanances-where-unique.input';
import { Type } from 'class-transformer';
import { routine_maintanancesUpdateWithoutBlockInput } from './routine-maintanances-update-without-block.input';

@InputType()
export class routine_maintanancesUpdateWithWhereUniqueWithoutBlockInput {

    @Field(() => routine_maintanancesWhereUniqueInput, {nullable:false})
    @Type(() => routine_maintanancesWhereUniqueInput)
    where!: routine_maintanancesWhereUniqueInput;

    @Field(() => routine_maintanancesUpdateWithoutBlockInput, {nullable:false})
    @Type(() => routine_maintanancesUpdateWithoutBlockInput)
    data!: routine_maintanancesUpdateWithoutBlockInput;
}
