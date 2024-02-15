import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { production_dataUpdateManyMutationInput } from '../production-data/production-data-update-many-mutation.input';
import { Type } from 'class-transformer';
import { production_dataWhereInput } from '../production-data/production-data-where.input';

@ArgsType()
export class UpdateManyproductionDataArgs {
  @Field(() => production_dataUpdateManyMutationInput, { nullable: false })
  @Type(() => production_dataUpdateManyMutationInput)
  data!: production_dataUpdateManyMutationInput;

  @Field(() => production_dataWhereInput, { nullable: true })
  @Type(() => production_dataWhereInput)
  where?: production_dataWhereInput;
}
