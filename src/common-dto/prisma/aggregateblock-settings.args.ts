import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { block_settingsWhereInput } from '../../block/block-settings/block-settings-where.input';
import { Type } from 'class-transformer';
import { block_settingsOrderByWithRelationAndSearchRelevanceInput } from '../../block/block-settings/block-settings-order-by-with-relation-and-search-relevance.input';
import { block_settingsWhereUniqueInput } from '../../block/block-settings/block-settings-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateblockSettingsArgs {
  @Field(() => block_settingsWhereInput, { nullable: true })
  @Type(() => block_settingsWhereInput)
  where?: block_settingsWhereInput;

  @Field(() => [block_settingsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<block_settingsOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => block_settingsWhereUniqueInput, { nullable: true })
  cursor?: block_settingsWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}