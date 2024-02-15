import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportsWhereUniqueInput } from './reports-where-unique.input';
import { Type } from 'class-transformer';
import { ReportsCreateWithoutMaintenanceInput } from './reports-create-without-maintenance.input';

@InputType()
export class ReportsCreateOrConnectWithoutMaintenanceInput {

    @Field(() => ReportsWhereUniqueInput, {nullable:false})
    @Type(() => ReportsWhereUniqueInput)
    where!: ReportsWhereUniqueInput;

    @Field(() => ReportsCreateWithoutMaintenanceInput, {nullable:false})
    @Type(() => ReportsCreateWithoutMaintenanceInput)
    create!: ReportsCreateWithoutMaintenanceInput;
}
