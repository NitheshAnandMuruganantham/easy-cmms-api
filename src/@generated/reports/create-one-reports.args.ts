import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportsCreateInput } from './reports-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneReportsArgs {

    @Field(() => ReportsCreateInput, {nullable:false})
    @Type(() => ReportsCreateInput)
    data!: ReportsCreateInput;
}
