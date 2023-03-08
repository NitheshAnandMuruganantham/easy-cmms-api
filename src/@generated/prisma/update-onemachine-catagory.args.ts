import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machine_catagoryUpdateInput } from '../machine-catagory/machine-catagory-update.input';
import { Type } from 'class-transformer';
import { machine_catagoryWhereUniqueInput } from '../machine-catagory/machine-catagory-where-unique.input';

@ArgsType()
export class UpdateOnemachineCatagoryArgs {

    @Field(() => machine_catagoryUpdateInput, {nullable:false})
    @Type(() => machine_catagoryUpdateInput)
    data!: machine_catagoryUpdateInput;

    @Field(() => machine_catagoryWhereUniqueInput, {nullable:false})
    @Type(() => machine_catagoryWhereUniqueInput)
    where!: machine_catagoryWhereUniqueInput;
}
