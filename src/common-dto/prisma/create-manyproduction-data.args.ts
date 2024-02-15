import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { production_dataCreateManyInput } from '../production-data/production-data-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyproductionDataArgs {
  @Field(() => [production_dataCreateManyInput], { nullable: false })
  @Type(() => production_dataCreateManyInput)
  data!: Array<production_dataCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
