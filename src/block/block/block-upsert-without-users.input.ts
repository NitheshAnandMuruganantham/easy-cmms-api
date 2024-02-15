import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockUpdateWithoutUsersInput } from './block-update-without-users.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutUsersInput } from './block-create-without-users.input';

@InputType()
export class BlockUpsertWithoutUsersInput {

    @Field(() => BlockUpdateWithoutUsersInput, {nullable:false})
    @Type(() => BlockUpdateWithoutUsersInput)
    update!: BlockUpdateWithoutUsersInput;

    @Field(() => BlockCreateWithoutUsersInput, {nullable:false})
    @Type(() => BlockCreateWithoutUsersInput)
    create!: BlockCreateWithoutUsersInput;
}
