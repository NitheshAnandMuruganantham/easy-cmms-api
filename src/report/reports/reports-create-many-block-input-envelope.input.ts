import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportsCreateManyBlockInput } from './reports-create-many-block.input';
import { Type } from 'class-transformer';

@InputType()
export class ReportsCreateManyBlockInputEnvelope {

    @Field(() => [ReportsCreateManyBlockInput], {nullable:false})
    @Type(() => ReportsCreateManyBlockInput)
    data!: Array<ReportsCreateManyBlockInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
