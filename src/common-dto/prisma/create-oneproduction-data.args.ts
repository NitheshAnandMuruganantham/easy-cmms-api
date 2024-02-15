import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { production_dataCreateInput } from '../production-data/production-data-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneproductionDataArgs {
  @Field(() => production_dataCreateInput, { nullable: false })
  @Type(() => production_dataCreateInput)
  data!: production_dataCreateInput;
}
