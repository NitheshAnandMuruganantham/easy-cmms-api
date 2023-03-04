import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { catagoryWhereUniqueInput } from './catagory-where-unique.input';
import { Type } from 'class-transformer';
import { catagoryCreateWithoutItemsInput } from './catagory-create-without-items.input';

@InputType()
export class catagoryCreateOrConnectWithoutItemsInput {

    @Field(() => catagoryWhereUniqueInput, {nullable:false})
    @Type(() => catagoryWhereUniqueInput)
    where!: catagoryWhereUniqueInput;

    @Field(() => catagoryCreateWithoutItemsInput, {nullable:false})
    @Type(() => catagoryCreateWithoutItemsInput)
    create!: catagoryCreateWithoutItemsInput;
}
