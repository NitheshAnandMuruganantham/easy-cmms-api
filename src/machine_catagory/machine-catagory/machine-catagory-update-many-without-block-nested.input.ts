import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machine_catagoryCreateWithoutBlockInput } from './machine-catagory-create-without-block.input';
import { Type } from 'class-transformer';
import { machine_catagoryCreateOrConnectWithoutBlockInput } from './machine-catagory-create-or-connect-without-block.input';
import { machine_catagoryUpsertWithWhereUniqueWithoutBlockInput } from './machine-catagory-upsert-with-where-unique-without-block.input';
import { machine_catagoryCreateManyBlockInputEnvelope } from './machine-catagory-create-many-block-input-envelope.input';
import { machine_catagoryWhereUniqueInput } from './machine-catagory-where-unique.input';
import { machine_catagoryUpdateWithWhereUniqueWithoutBlockInput } from './machine-catagory-update-with-where-unique-without-block.input';
import { machine_catagoryUpdateManyWithWhereWithoutBlockInput } from './machine-catagory-update-many-with-where-without-block.input';
import { machine_catagoryScalarWhereInput } from './machine-catagory-scalar-where.input';

@InputType()
export class machine_catagoryUpdateManyWithoutBlockNestedInput {

    @Field(() => [machine_catagoryCreateWithoutBlockInput], {nullable:true})
    @Type(() => machine_catagoryCreateWithoutBlockInput)
    create?: Array<machine_catagoryCreateWithoutBlockInput>;

    @Field(() => [machine_catagoryCreateOrConnectWithoutBlockInput], {nullable:true})
    @Type(() => machine_catagoryCreateOrConnectWithoutBlockInput)
    connectOrCreate?: Array<machine_catagoryCreateOrConnectWithoutBlockInput>;

    @Field(() => [machine_catagoryUpsertWithWhereUniqueWithoutBlockInput], {nullable:true})
    @Type(() => machine_catagoryUpsertWithWhereUniqueWithoutBlockInput)
    upsert?: Array<machine_catagoryUpsertWithWhereUniqueWithoutBlockInput>;

    @Field(() => machine_catagoryCreateManyBlockInputEnvelope, {nullable:true})
    @Type(() => machine_catagoryCreateManyBlockInputEnvelope)
    createMany?: machine_catagoryCreateManyBlockInputEnvelope;

    @Field(() => [machine_catagoryWhereUniqueInput], {nullable:true})
    @Type(() => machine_catagoryWhereUniqueInput)
    set?: Array<machine_catagoryWhereUniqueInput>;

    @Field(() => [machine_catagoryWhereUniqueInput], {nullable:true})
    @Type(() => machine_catagoryWhereUniqueInput)
    disconnect?: Array<machine_catagoryWhereUniqueInput>;

    @Field(() => [machine_catagoryWhereUniqueInput], {nullable:true})
    @Type(() => machine_catagoryWhereUniqueInput)
    delete?: Array<machine_catagoryWhereUniqueInput>;

    @Field(() => [machine_catagoryWhereUniqueInput], {nullable:true})
    @Type(() => machine_catagoryWhereUniqueInput)
    connect?: Array<machine_catagoryWhereUniqueInput>;

    @Field(() => [machine_catagoryUpdateWithWhereUniqueWithoutBlockInput], {nullable:true})
    @Type(() => machine_catagoryUpdateWithWhereUniqueWithoutBlockInput)
    update?: Array<machine_catagoryUpdateWithWhereUniqueWithoutBlockInput>;

    @Field(() => [machine_catagoryUpdateManyWithWhereWithoutBlockInput], {nullable:true})
    @Type(() => machine_catagoryUpdateManyWithWhereWithoutBlockInput)
    updateMany?: Array<machine_catagoryUpdateManyWithWhereWithoutBlockInput>;

    @Field(() => [machine_catagoryScalarWhereInput], {nullable:true})
    @Type(() => machine_catagoryScalarWhereInput)
    deleteMany?: Array<machine_catagoryScalarWhereInput>;
}
