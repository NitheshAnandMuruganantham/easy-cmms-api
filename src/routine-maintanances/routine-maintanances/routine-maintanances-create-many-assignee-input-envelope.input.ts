import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { routine_maintanancesCreateManyAssigneeInput } from './routine-maintanances-create-many-assignee.input';
import { Type } from 'class-transformer';

@InputType()
export class routine_maintanancesCreateManyAssigneeInputEnvelope {
  @Field(() => [routine_maintanancesCreateManyAssigneeInput], {
    nullable: false,
  })
  @Type(() => routine_maintanancesCreateManyAssigneeInput)
  data!: Array<routine_maintanancesCreateManyAssigneeInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
