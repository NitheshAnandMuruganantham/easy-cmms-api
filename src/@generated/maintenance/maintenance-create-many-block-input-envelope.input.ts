import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceCreateManyBlockInput } from './maintenance-create-many-block.input';
import { Type } from 'class-transformer';

@InputType()
export class MaintenanceCreateManyBlockInputEnvelope {

    @Field(() => [MaintenanceCreateManyBlockInput], {nullable:false})
    @Type(() => MaintenanceCreateManyBlockInput)
    data!: Array<MaintenanceCreateManyBlockInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
