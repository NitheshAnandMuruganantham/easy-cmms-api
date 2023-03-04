import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportsWhereUniqueInput } from './reports-where-unique.input';
import { Type } from 'class-transformer';
import { ReportsUpdateWithoutMaintenanceInput } from './reports-update-without-maintenance.input';

@InputType()
export class ReportsUpdateWithWhereUniqueWithoutMaintenanceInput {

    @Field(() => ReportsWhereUniqueInput, {nullable:false})
    @Type(() => ReportsWhereUniqueInput)
    where!: ReportsWhereUniqueInput;

    @Field(() => ReportsUpdateWithoutMaintenanceInput, {nullable:false})
    @Type(() => ReportsUpdateWithoutMaintenanceInput)
    data!: ReportsUpdateWithoutMaintenanceInput;
}
