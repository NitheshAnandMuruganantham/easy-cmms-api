import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportsCreateManyInput } from './reports-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyReportsArgs {

    @Field(() => [ReportsCreateManyInput], {nullable:false})
    @Type(() => ReportsCreateManyInput)
    data!: Array<ReportsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
