import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { routine_maintanancesCreateManyBlockInput } from './routine-maintanances-create-many-block.input';
import { Type } from 'class-transformer';

@InputType()
export class routine_maintanancesCreateManyBlockInputEnvelope {
  @Field(() => [routine_maintanancesCreateManyBlockInput], { nullable: false })
  @Type(() => routine_maintanancesCreateManyBlockInput)
  data!: Array<routine_maintanancesCreateManyBlockInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
