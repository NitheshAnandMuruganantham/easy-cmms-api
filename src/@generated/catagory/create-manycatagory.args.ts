import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { catagoryCreateManyInput } from './catagory-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManycatagoryArgs {

    @Field(() => [catagoryCreateManyInput], {nullable:false})
    @Type(() => catagoryCreateManyInput)
    data!: Array<catagoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
