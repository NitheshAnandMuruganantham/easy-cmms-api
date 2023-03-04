import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportsWhereUniqueInput } from './reports-where-unique.input';
import { Type } from 'class-transformer';
import { ReportsCreateInput } from './reports-create.input';
import { ReportsUpdateInput } from './reports-update.input';

@ArgsType()
export class UpsertOneReportsArgs {

    @Field(() => ReportsWhereUniqueInput, {nullable:false})
    @Type(() => ReportsWhereUniqueInput)
    where!: ReportsWhereUniqueInput;

    @Field(() => ReportsCreateInput, {nullable:false})
    @Type(() => ReportsCreateInput)
    create!: ReportsCreateInput;

    @Field(() => ReportsUpdateInput, {nullable:false})
    @Type(() => ReportsUpdateInput)
    update!: ReportsUpdateInput;
}
