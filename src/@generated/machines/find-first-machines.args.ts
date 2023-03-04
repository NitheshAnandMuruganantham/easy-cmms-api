import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MachinesWhereInput } from './machines-where.input';
import { Type } from 'class-transformer';
import { MachinesOrderByWithRelationAndSearchRelevanceInput } from './machines-order-by-with-relation-and-search-relevance.input';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MachinesScalarFieldEnum } from './machines-scalar-field.enum';

@ArgsType()
export class FindFirstMachinesArgs {

    @Field(() => MachinesWhereInput, {nullable:true})
    @Type(() => MachinesWhereInput)
    where?: MachinesWhereInput;

    @Field(() => [MachinesOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<MachinesOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => MachinesWhereUniqueInput, {nullable:true})
    cursor?: MachinesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MachinesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MachinesScalarFieldEnum>;
}
