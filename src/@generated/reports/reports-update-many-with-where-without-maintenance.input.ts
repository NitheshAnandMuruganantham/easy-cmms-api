import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportsScalarWhereInput } from './reports-scalar-where.input';
import { Type } from 'class-transformer';
import { ReportsUpdateManyMutationInput } from './reports-update-many-mutation.input';

@InputType()
export class ReportsUpdateManyWithWhereWithoutMaintenanceInput {

    @Field(() => ReportsScalarWhereInput, {nullable:false})
    @Type(() => ReportsScalarWhereInput)
    where!: ReportsScalarWhereInput;

    @Field(() => ReportsUpdateManyMutationInput, {nullable:false})
    @Type(() => ReportsUpdateManyMutationInput)
    data!: ReportsUpdateManyMutationInput;
}
