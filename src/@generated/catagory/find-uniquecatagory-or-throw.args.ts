import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { catagoryWhereUniqueInput } from './catagory-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquecatagoryOrThrowArgs {

    @Field(() => catagoryWhereUniqueInput, {nullable:false})
    @Type(() => catagoryWhereUniqueInput)
    where!: catagoryWhereUniqueInput;
}
