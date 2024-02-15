import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportsWhereUniqueInput } from './reports-where-unique.input';
import { Type } from 'class-transformer';
import { ReportsUpdateWithoutBlockInput } from './reports-update-without-block.input';

@InputType()
export class ReportsUpdateWithWhereUniqueWithoutBlockInput {

    @Field(() => ReportsWhereUniqueInput, {nullable:false})
    @Type(() => ReportsWhereUniqueInput)
    where!: ReportsWhereUniqueInput;

    @Field(() => ReportsUpdateWithoutBlockInput, {nullable:false})
    @Type(() => ReportsUpdateWithoutBlockInput)
    data!: ReportsUpdateWithoutBlockInput;
}
