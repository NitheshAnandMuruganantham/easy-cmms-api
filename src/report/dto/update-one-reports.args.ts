import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportsUpdateInput } from './reports-update.input';
import { Type } from 'class-transformer';
import { ReportsWhereUniqueInput } from './reports-where-unique.input';

@ArgsType()
export class UpdateOneReportsArgs {
  @Field(() => ReportsUpdateInput, { nullable: false })
  @Type(() => ReportsUpdateInput)
  data!: ReportsUpdateInput;

  @Field(() => ReportsWhereUniqueInput, { nullable: false })
  @Type(() => ReportsWhereUniqueInput)
  where!: ReportsWhereUniqueInput;
}
