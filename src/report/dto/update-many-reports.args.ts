import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReportsUpdateManyMutationInput } from './reports-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ReportsWhereInput } from './reports-where.input';

@ArgsType()
export class UpdateManyReportsArgs {
  @Field(() => ReportsUpdateManyMutationInput, { nullable: false })
  @Type(() => ReportsUpdateManyMutationInput)
  data!: ReportsUpdateManyMutationInput;

  @Field(() => ReportsWhereInput, { nullable: true })
  @Type(() => ReportsWhereInput)
  where?: ReportsWhereInput;
}
