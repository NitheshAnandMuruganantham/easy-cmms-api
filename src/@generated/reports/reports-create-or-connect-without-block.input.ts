import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportsWhereUniqueInput } from './reports-where-unique.input';
import { Type } from 'class-transformer';
import { ReportsCreateWithoutBlockInput } from './reports-create-without-block.input';

@InputType()
export class ReportsCreateOrConnectWithoutBlockInput {

    @Field(() => ReportsWhereUniqueInput, {nullable:false})
    @Type(() => ReportsWhereUniqueInput)
    where!: ReportsWhereUniqueInput;

    @Field(() => ReportsCreateWithoutBlockInput, {nullable:false})
    @Type(() => ReportsCreateWithoutBlockInput)
    create!: ReportsCreateWithoutBlockInput;
}
