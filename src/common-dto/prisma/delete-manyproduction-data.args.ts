import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { production_dataWhereInput } from '../production-data/production-data-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyproductionDataArgs {
  @Field(() => production_dataWhereInput, { nullable: true })
  @Type(() => production_dataWhereInput)
  where?: production_dataWhereInput;
}
