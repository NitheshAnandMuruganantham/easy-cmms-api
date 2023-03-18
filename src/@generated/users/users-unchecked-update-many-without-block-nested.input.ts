import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateWithoutBlockInput } from './users-create-without-block.input';
import { Type } from 'class-transformer';
import { UsersCreateOrConnectWithoutBlockInput } from './users-create-or-connect-without-block.input';
import { UsersUpsertWithWhereUniqueWithoutBlockInput } from './users-upsert-with-where-unique-without-block.input';
import { UsersCreateManyBlockInputEnvelope } from './users-create-many-block-input-envelope.input';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { UsersUpdateWithWhereUniqueWithoutBlockInput } from './users-update-with-where-unique-without-block.input';
import { UsersUpdateManyWithWhereWithoutBlockInput } from './users-update-many-with-where-without-block.input';
import { UsersScalarWhereInput } from './users-scalar-where.input';

@InputType()
export class UsersUncheckedUpdateManyWithoutBlockNestedInput {

    @Field(() => [UsersCreateWithoutBlockInput], {nullable:true})
    @Type(() => UsersCreateWithoutBlockInput)
    create?: Array<UsersCreateWithoutBlockInput>;

    @Field(() => [UsersCreateOrConnectWithoutBlockInput], {nullable:true})
    @Type(() => UsersCreateOrConnectWithoutBlockInput)
    connectOrCreate?: Array<UsersCreateOrConnectWithoutBlockInput>;

    @Field(() => [UsersUpsertWithWhereUniqueWithoutBlockInput], {nullable:true})
    @Type(() => UsersUpsertWithWhereUniqueWithoutBlockInput)
    upsert?: Array<UsersUpsertWithWhereUniqueWithoutBlockInput>;

    @Field(() => UsersCreateManyBlockInputEnvelope, {nullable:true})
    @Type(() => UsersCreateManyBlockInputEnvelope)
    createMany?: UsersCreateManyBlockInputEnvelope;

    @Field(() => [UsersWhereUniqueInput], {nullable:true})
    @Type(() => UsersWhereUniqueInput)
    set?: Array<UsersWhereUniqueInput>;

    @Field(() => [UsersWhereUniqueInput], {nullable:true})
    @Type(() => UsersWhereUniqueInput)
    disconnect?: Array<UsersWhereUniqueInput>;

    @Field(() => [UsersWhereUniqueInput], {nullable:true})
    @Type(() => UsersWhereUniqueInput)
    delete?: Array<UsersWhereUniqueInput>;

    @Field(() => [UsersWhereUniqueInput], {nullable:true})
    @Type(() => UsersWhereUniqueInput)
    connect?: Array<UsersWhereUniqueInput>;

    @Field(() => [UsersUpdateWithWhereUniqueWithoutBlockInput], {nullable:true})
    @Type(() => UsersUpdateWithWhereUniqueWithoutBlockInput)
    update?: Array<UsersUpdateWithWhereUniqueWithoutBlockInput>;

    @Field(() => [UsersUpdateManyWithWhereWithoutBlockInput], {nullable:true})
    @Type(() => UsersUpdateManyWithWhereWithoutBlockInput)
    updateMany?: Array<UsersUpdateManyWithWhereWithoutBlockInput>;

    @Field(() => [UsersScalarWhereInput], {nullable:true})
    @Type(() => UsersScalarWhereInput)
    deleteMany?: Array<UsersScalarWhereInput>;
}
