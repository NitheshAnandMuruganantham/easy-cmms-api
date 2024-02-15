import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportsWhereUniqueInput } from './reports-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueReportsArgs {
  @Field(() => ReportsWhereUniqueInput, { nullable: false })
  @Type(() => ReportsWhereUniqueInput)
  where!: ReportsWhereUniqueInput;
}
