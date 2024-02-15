import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportsWhereInput } from './reports-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyReportsArgs {

    @Field(() => ReportsWhereInput, {nullable:true})
    @Type(() => ReportsWhereInput)
    where?: ReportsWhereInput;
}
