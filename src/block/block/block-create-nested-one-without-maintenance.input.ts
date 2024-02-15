import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutMaintenanceInput } from './block-create-without-maintenance.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutMaintenanceInput } from './block-create-or-connect-without-maintenance.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';

@InputType()
export class BlockCreateNestedOneWithoutMaintenanceInput {

    @Field(() => BlockCreateWithoutMaintenanceInput, {nullable:true})
    @Type(() => BlockCreateWithoutMaintenanceInput)
    create?: BlockCreateWithoutMaintenanceInput;

    @Field(() => BlockCreateOrConnectWithoutMaintenanceInput, {nullable:true})
    @Type(() => BlockCreateOrConnectWithoutMaintenanceInput)
    connectOrCreate?: BlockCreateOrConnectWithoutMaintenanceInput;

    @Field(() => BlockWhereUniqueInput, {nullable:true})
    @Type(() => BlockWhereUniqueInput)
    connect?: BlockWhereUniqueInput;
}
