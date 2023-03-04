import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReportsWhereUniqueInput } from './reports-where-unique.input';
import { Type } from 'class-transformer';
import { ReportsUpdateWithoutMaintenanceInput } from './reports-update-without-maintenance.input';
import { ReportsCreateWithoutMaintenanceInput } from './reports-create-without-maintenance.input';

@InputType()
export class ReportsUpsertWithWhereUniqueWithoutMaintenanceInput {

    @Field(() => ReportsWhereUniqueInput, {nullable:false})
    @Type(() => ReportsWhereUniqueInput)
    where!: ReportsWhereUniqueInput;

    @Field(() => ReportsUpdateWithoutMaintenanceInput, {nullable:false})
    @Type(() => ReportsUpdateWithoutMaintenanceInput)
    update!: ReportsUpdateWithoutMaintenanceInput;

    @Field(() => ReportsCreateWithoutMaintenanceInput, {nullable:false})
    @Type(() => ReportsCreateWithoutMaintenanceInput)
    create!: ReportsCreateWithoutMaintenanceInput;
}
