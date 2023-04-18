import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machine_catagoryWhereUniqueInput } from './machine-catagory-where-unique.input';
import { Type } from 'class-transformer';
import { machine_catagoryCreateWithoutBlockInput } from './machine-catagory-create-without-block.input';

@InputType()
export class machine_catagoryCreateOrConnectWithoutBlockInput {

    @Field(() => machine_catagoryWhereUniqueInput, {nullable:false})
    @Type(() => machine_catagoryWhereUniqueInput)
    where!: machine_catagoryWhereUniqueInput;

    @Field(() => machine_catagoryCreateWithoutBlockInput, {nullable:false})
    @Type(() => machine_catagoryCreateWithoutBlockInput)
    create!: machine_catagoryCreateWithoutBlockInput;
}
