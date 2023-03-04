import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaintenanceCreateManyInput } from './maintenance-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMaintenanceArgs {

    @Field(() => [MaintenanceCreateManyInput], {nullable:false})
    @Type(() => MaintenanceCreateManyInput)
    data!: Array<MaintenanceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
