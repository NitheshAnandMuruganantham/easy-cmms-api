import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { routine_maintanancesWhereUniqueInput } from './routine-maintanances-where-unique.input';
import { Type } from 'class-transformer';
import { routine_maintanancesCreateWithoutBlockInput } from './routine-maintanances-create-without-block.input';

@InputType()
export class routine_maintanancesCreateOrConnectWithoutBlockInput {

    @Field(() => routine_maintanancesWhereUniqueInput, {nullable:false})
    @Type(() => routine_maintanancesWhereUniqueInput)
    where!: routine_maintanancesWhereUniqueInput;

    @Field(() => routine_maintanancesCreateWithoutBlockInput, {nullable:false})
    @Type(() => routine_maintanancesCreateWithoutBlockInput)
    create!: routine_maintanancesCreateWithoutBlockInput;
}
