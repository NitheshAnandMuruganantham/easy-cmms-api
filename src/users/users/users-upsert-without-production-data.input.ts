import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersUpdateWithoutProduction_dataInput } from './users-update-without-production-data.input';
import { Type } from 'class-transformer';
import { UsersCreateWithoutProduction_dataInput } from './users-create-without-production-data.input';

@InputType()
export class UsersUpsertWithoutProduction_dataInput {

    @Field(() => UsersUpdateWithoutProduction_dataInput, {nullable:false})
    @Type(() => UsersUpdateWithoutProduction_dataInput)
    update!: UsersUpdateWithoutProduction_dataInput;

    @Field(() => UsersCreateWithoutProduction_dataInput, {nullable:false})
    @Type(() => UsersCreateWithoutProduction_dataInput)
    create!: UsersCreateWithoutProduction_dataInput;
}
