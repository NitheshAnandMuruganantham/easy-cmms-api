import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersCreateManyBlockInput } from './users-create-many-block.input';
import { Type } from 'class-transformer';

@InputType()
export class UsersCreateManyBlockInputEnvelope {

    @Field(() => [UsersCreateManyBlockInput], {nullable:false})
    @Type(() => UsersCreateManyBlockInput)
    data!: Array<UsersCreateManyBlockInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
