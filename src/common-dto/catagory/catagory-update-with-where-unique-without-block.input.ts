import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { catagoryWhereUniqueInput } from './catagory-where-unique.input';
import { Type } from 'class-transformer';
import { catagoryUpdateWithoutBlockInput } from './catagory-update-without-block.input';

@InputType()
export class catagoryUpdateWithWhereUniqueWithoutBlockInput {

    @Field(() => catagoryWhereUniqueInput, {nullable:false})
    @Type(() => catagoryWhereUniqueInput)
    where!: catagoryWhereUniqueInput;

    @Field(() => catagoryUpdateWithoutBlockInput, {nullable:false})
    @Type(() => catagoryUpdateWithoutBlockInput)
    data!: catagoryUpdateWithoutBlockInput;
}
