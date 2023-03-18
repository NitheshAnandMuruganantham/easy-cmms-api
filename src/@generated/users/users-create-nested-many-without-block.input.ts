import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateWithoutBlockInput } from './users-create-without-block.input';
import { Type } from 'class-transformer';
import { UsersCreateOrConnectWithoutBlockInput } from './users-create-or-connect-without-block.input';
import { UsersCreateManyBlockInputEnvelope } from './users-create-many-block-input-envelope.input';
import { UsersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class UsersCreateNestedManyWithoutBlockInput {

    @Field(() => [UsersCreateWithoutBlockInput], {nullable:true})
    @Type(() => UsersCreateWithoutBlockInput)
    create?: Array<UsersCreateWithoutBlockInput>;

    @Field(() => [UsersCreateOrConnectWithoutBlockInput], {nullable:true})
    @Type(() => UsersCreateOrConnectWithoutBlockInput)
    connectOrCreate?: Array<UsersCreateOrConnectWithoutBlockInput>;

    @Field(() => UsersCreateManyBlockInputEnvelope, {nullable:true})
    @Type(() => UsersCreateManyBlockInputEnvelope)
    createMany?: UsersCreateManyBlockInputEnvelope;

    @Field(() => [UsersWhereUniqueInput], {nullable:true})
    @Type(() => UsersWhereUniqueInput)
    connect?: Array<UsersWhereUniqueInput>;
}
