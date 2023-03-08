import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machine_catagoryUpdateManyMutationInput } from '../machine-catagory/machine-catagory-update-many-mutation.input';
import { Type } from 'class-transformer';
import { machine_catagoryWhereInput } from '../machine-catagory/machine-catagory-where.input';

@ArgsType()
export class UpdateManymachineCatagoryArgs {

    @Field(() => machine_catagoryUpdateManyMutationInput, {nullable:false})
    @Type(() => machine_catagoryUpdateManyMutationInput)
    data!: machine_catagoryUpdateManyMutationInput;

    @Field(() => machine_catagoryWhereInput, {nullable:true})
    @Type(() => machine_catagoryWhereInput)
    where?: machine_catagoryWhereInput;
}
