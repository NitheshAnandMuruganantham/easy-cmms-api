import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutUsersInput } from './block-create-without-users.input';

@InputType()
export class BlockCreateOrConnectWithoutUsersInput {

    @Field(() => BlockWhereUniqueInput, {nullable:false})
    @Type(() => BlockWhereUniqueInput)
    where!: BlockWhereUniqueInput;

    @Field(() => BlockCreateWithoutUsersInput, {nullable:false})
    @Type(() => BlockCreateWithoutUsersInput)
    create!: BlockCreateWithoutUsersInput;
}
