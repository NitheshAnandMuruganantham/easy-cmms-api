import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { block_settingsWhereInput } from '../block-settings/block-settings-where.input';
import { Type } from 'class-transformer';
import { block_settingsOrderByWithAggregationInput } from '../block-settings/block-settings-order-by-with-aggregation.input';
import { Block_settingsScalarFieldEnum } from './block-settings-scalar-field.enum';
import { block_settingsScalarWhereWithAggregatesInput } from '../block-settings/block-settings-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByblockSettingsArgs {

    @Field(() => block_settingsWhereInput, {nullable:true})
    @Type(() => block_settingsWhereInput)
    where?: block_settingsWhereInput;

    @Field(() => [block_settingsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<block_settingsOrderByWithAggregationInput>;

    @Field(() => [Block_settingsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Block_settingsScalarFieldEnum>;

    @Field(() => block_settingsScalarWhereWithAggregatesInput, {nullable:true})
    having?: block_settingsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
