import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { catagoryCreateWithoutBlockInput } from './catagory-create-without-block.input';
import { Type } from 'class-transformer';
import { catagoryCreateOrConnectWithoutBlockInput } from './catagory-create-or-connect-without-block.input';
import { catagoryUpsertWithWhereUniqueWithoutBlockInput } from './catagory-upsert-with-where-unique-without-block.input';
import { catagoryCreateManyBlockInputEnvelope } from './catagory-create-many-block-input-envelope.input';
import { catagoryWhereUniqueInput } from './catagory-where-unique.input';
import { catagoryUpdateWithWhereUniqueWithoutBlockInput } from './catagory-update-with-where-unique-without-block.input';
import { catagoryUpdateManyWithWhereWithoutBlockInput } from './catagory-update-many-with-where-without-block.input';
import { catagoryScalarWhereInput } from './catagory-scalar-where.input';

@InputType()
export class catagoryUpdateManyWithoutBlockNestedInput {

    @Field(() => [catagoryCreateWithoutBlockInput], {nullable:true})
    @Type(() => catagoryCreateWithoutBlockInput)
    create?: Array<catagoryCreateWithoutBlockInput>;

    @Field(() => [catagoryCreateOrConnectWithoutBlockInput], {nullable:true})
    @Type(() => catagoryCreateOrConnectWithoutBlockInput)
    connectOrCreate?: Array<catagoryCreateOrConnectWithoutBlockInput>;

    @Field(() => [catagoryUpsertWithWhereUniqueWithoutBlockInput], {nullable:true})
    @Type(() => catagoryUpsertWithWhereUniqueWithoutBlockInput)
    upsert?: Array<catagoryUpsertWithWhereUniqueWithoutBlockInput>;

    @Field(() => catagoryCreateManyBlockInputEnvelope, {nullable:true})
    @Type(() => catagoryCreateManyBlockInputEnvelope)
    createMany?: catagoryCreateManyBlockInputEnvelope;

    @Field(() => [catagoryWhereUniqueInput], {nullable:true})
    @Type(() => catagoryWhereUniqueInput)
    set?: Array<catagoryWhereUniqueInput>;

    @Field(() => [catagoryWhereUniqueInput], {nullable:true})
    @Type(() => catagoryWhereUniqueInput)
    disconnect?: Array<catagoryWhereUniqueInput>;

    @Field(() => [catagoryWhereUniqueInput], {nullable:true})
    @Type(() => catagoryWhereUniqueInput)
    delete?: Array<catagoryWhereUniqueInput>;

    @Field(() => [catagoryWhereUniqueInput], {nullable:true})
    @Type(() => catagoryWhereUniqueInput)
    connect?: Array<catagoryWhereUniqueInput>;

    @Field(() => [catagoryUpdateWithWhereUniqueWithoutBlockInput], {nullable:true})
    @Type(() => catagoryUpdateWithWhereUniqueWithoutBlockInput)
    update?: Array<catagoryUpdateWithWhereUniqueWithoutBlockInput>;

    @Field(() => [catagoryUpdateManyWithWhereWithoutBlockInput], {nullable:true})
    @Type(() => catagoryUpdateManyWithWhereWithoutBlockInput)
    updateMany?: Array<catagoryUpdateManyWithWhereWithoutBlockInput>;

    @Field(() => [catagoryScalarWhereInput], {nullable:true})
    @Type(() => catagoryScalarWhereInput)
    deleteMany?: Array<catagoryScalarWhereInput>;
}
