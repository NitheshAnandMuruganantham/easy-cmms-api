import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machine_catagoryCreateWithoutMachinesInput } from './machine-catagory-create-without-machines.input';
import { Type } from 'class-transformer';
import { machine_catagoryCreateOrConnectWithoutMachinesInput } from './machine-catagory-create-or-connect-without-machines.input';
import { machine_catagoryWhereUniqueInput } from './machine-catagory-where-unique.input';

@InputType()
export class machine_catagoryCreateNestedOneWithoutMachinesInput {

    @Field(() => machine_catagoryCreateWithoutMachinesInput, {nullable:true})
    @Type(() => machine_catagoryCreateWithoutMachinesInput)
    create?: machine_catagoryCreateWithoutMachinesInput;

    @Field(() => machine_catagoryCreateOrConnectWithoutMachinesInput, {nullable:true})
    @Type(() => machine_catagoryCreateOrConnectWithoutMachinesInput)
    connectOrCreate?: machine_catagoryCreateOrConnectWithoutMachinesInput;

    @Field(() => machine_catagoryWhereUniqueInput, {nullable:true})
    @Type(() => machine_catagoryWhereUniqueInput)
    connect?: machine_catagoryWhereUniqueInput;
}
