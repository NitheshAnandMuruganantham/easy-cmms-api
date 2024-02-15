import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { catagoryScalarWhereInput } from './catagory-scalar-where.input';
import { Type } from 'class-transformer';
import { catagoryUpdateManyMutationInput } from './catagory-update-many-mutation.input';

@InputType()
export class catagoryUpdateManyWithWhereWithoutBlockInput {

    @Field(() => catagoryScalarWhereInput, {nullable:false})
    @Type(() => catagoryScalarWhereInput)
    where!: catagoryScalarWhereInput;

    @Field(() => catagoryUpdateManyMutationInput, {nullable:false})
    @Type(() => catagoryUpdateManyMutationInput)
    data!: catagoryUpdateManyMutationInput;
}
