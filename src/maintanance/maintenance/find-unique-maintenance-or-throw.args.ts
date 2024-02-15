import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMaintenanceOrThrowArgs {

    @Field(() => MaintenanceWhereUniqueInput, {nullable:false})
    @Type(() => MaintenanceWhereUniqueInput)
    where!: MaintenanceWhereUniqueInput;
}
