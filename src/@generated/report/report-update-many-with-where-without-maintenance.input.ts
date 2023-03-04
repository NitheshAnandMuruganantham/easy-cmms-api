import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportScalarWhereInput } from './report-scalar-where.input';
import { Type } from 'class-transformer';
import { ReportUpdateManyMutationInput } from './report-update-many-mutation.input';

@InputType()
export class ReportUpdateManyWithWhereWithoutMaintenanceInput {

    @Field(() => ReportScalarWhereInput, {nullable:false})
    @Type(() => ReportScalarWhereInput)
    where!: ReportScalarWhereInput;

    @Field(() => ReportUpdateManyMutationInput, {nullable:false})
    @Type(() => ReportUpdateManyMutationInput)
    data!: ReportUpdateManyMutationInput;
}
