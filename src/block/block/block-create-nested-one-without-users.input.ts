import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutUsersInput } from './block-create-without-users.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutUsersInput } from './block-create-or-connect-without-users.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';

@InputType()
export class BlockCreateNestedOneWithoutUsersInput {

    @Field(() => BlockCreateWithoutUsersInput, {nullable:true})
    @Type(() => BlockCreateWithoutUsersInput)
    create?: BlockCreateWithoutUsersInput;

    @Field(() => BlockCreateOrConnectWithoutUsersInput, {nullable:true})
    @Type(() => BlockCreateOrConnectWithoutUsersInput)
    connectOrCreate?: BlockCreateOrConnectWithoutUsersInput;

    @Field(() => BlockWhereUniqueInput, {nullable:true})
    @Type(() => BlockWhereUniqueInput)
    connect?: BlockWhereUniqueInput;
}
