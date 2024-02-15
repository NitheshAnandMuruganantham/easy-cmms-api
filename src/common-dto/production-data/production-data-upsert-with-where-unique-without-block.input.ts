import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { production_dataWhereUniqueInput } from './production-data-where-unique.input';
import { Type } from 'class-transformer';
import { production_dataUpdateWithoutBlockInput } from './production-data-update-without-block.input';
import { production_dataCreateWithoutBlockInput } from './production-data-create-without-block.input';

@InputType()
export class production_dataUpsertWithWhereUniqueWithoutBlockInput {
  @Field(() => production_dataWhereUniqueInput, { nullable: false })
  @Type(() => production_dataWhereUniqueInput)
  where!: production_dataWhereUniqueInput;

  @Field(() => production_dataUpdateWithoutBlockInput, { nullable: false })
  @Type(() => production_dataUpdateWithoutBlockInput)
  update!: production_dataUpdateWithoutBlockInput;

  @Field(() => production_dataCreateWithoutBlockInput, { nullable: false })
  @Type(() => production_dataCreateWithoutBlockInput)
  create!: production_dataCreateWithoutBlockInput;
}
