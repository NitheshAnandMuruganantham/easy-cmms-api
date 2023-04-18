import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceCreateWithoutBlockInput } from './maintenance-create-without-block.input';
import { Type } from 'class-transformer';
import { MaintenanceCreateOrConnectWithoutBlockInput } from './maintenance-create-or-connect-without-block.input';
import { MaintenanceUpsertWithWhereUniqueWithoutBlockInput } from './maintenance-upsert-with-where-unique-without-block.input';
import { MaintenanceCreateManyBlockInputEnvelope } from './maintenance-create-many-block-input-envelope.input';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';
import { MaintenanceUpdateWithWhereUniqueWithoutBlockInput } from './maintenance-update-with-where-unique-without-block.input';
import { MaintenanceUpdateManyWithWhereWithoutBlockInput } from './maintenance-update-many-with-where-without-block.input';
import { MaintenanceScalarWhereInput } from './maintenance-scalar-where.input';

@InputType()
export class MaintenanceUpdateManyWithoutBlockNestedInput {

    @Field(() => [MaintenanceCreateWithoutBlockInput], {nullable:true})
    @Type(() => MaintenanceCreateWithoutBlockInput)
    create?: Array<MaintenanceCreateWithoutBlockInput>;

    @Field(() => [MaintenanceCreateOrConnectWithoutBlockInput], {nullable:true})
    @Type(() => MaintenanceCreateOrConnectWithoutBlockInput)
    connectOrCreate?: Array<MaintenanceCreateOrConnectWithoutBlockInput>;

    @Field(() => [MaintenanceUpsertWithWhereUniqueWithoutBlockInput], {nullable:true})
    @Type(() => MaintenanceUpsertWithWhereUniqueWithoutBlockInput)
    upsert?: Array<MaintenanceUpsertWithWhereUniqueWithoutBlockInput>;

    @Field(() => MaintenanceCreateManyBlockInputEnvelope, {nullable:true})
    @Type(() => MaintenanceCreateManyBlockInputEnvelope)
    createMany?: MaintenanceCreateManyBlockInputEnvelope;

    @Field(() => [MaintenanceWhereUniqueInput], {nullable:true})
    @Type(() => MaintenanceWhereUniqueInput)
    set?: Array<MaintenanceWhereUniqueInput>;

    @Field(() => [MaintenanceWhereUniqueInput], {nullable:true})
    @Type(() => MaintenanceWhereUniqueInput)
    disconnect?: Array<MaintenanceWhereUniqueInput>;

    @Field(() => [MaintenanceWhereUniqueInput], {nullable:true})
    @Type(() => MaintenanceWhereUniqueInput)
    delete?: Array<MaintenanceWhereUniqueInput>;

    @Field(() => [MaintenanceWhereUniqueInput], {nullable:true})
    @Type(() => MaintenanceWhereUniqueInput)
    connect?: Array<MaintenanceWhereUniqueInput>;

    @Field(() => [MaintenanceUpdateWithWhereUniqueWithoutBlockInput], {nullable:true})
    @Type(() => MaintenanceUpdateWithWhereUniqueWithoutBlockInput)
    update?: Array<MaintenanceUpdateWithWhereUniqueWithoutBlockInput>;

    @Field(() => [MaintenanceUpdateManyWithWhereWithoutBlockInput], {nullable:true})
    @Type(() => MaintenanceUpdateManyWithWhereWithoutBlockInput)
    updateMany?: Array<MaintenanceUpdateManyWithWhereWithoutBlockInput>;

    @Field(() => [MaintenanceScalarWhereInput], {nullable:true})
    @Type(() => MaintenanceScalarWhereInput)
    deleteMany?: Array<MaintenanceScalarWhereInput>;
}
