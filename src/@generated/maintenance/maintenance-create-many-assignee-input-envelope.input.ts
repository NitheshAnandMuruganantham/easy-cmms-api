import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceCreateManyAssigneeInput } from './maintenance-create-many-assignee.input';
import { Type } from 'class-transformer';

@InputType()
export class MaintenanceCreateManyAssigneeInputEnvelope {

    @Field(() => [MaintenanceCreateManyAssigneeInput], {nullable:false})
    @Type(() => MaintenanceCreateManyAssigneeInput)
    data!: Array<MaintenanceCreateManyAssigneeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
