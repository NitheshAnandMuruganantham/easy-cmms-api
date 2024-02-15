import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReplacementsCreateManyItemsInput } from './replacements-create-many-items.input';
import { Type } from 'class-transformer';

@InputType()
export class ReplacementsCreateManyItemsInputEnvelope {
  @Field(() => [ReplacementsCreateManyItemsInput], { nullable: false })
  @Type(() => ReplacementsCreateManyItemsInput)
  data!: Array<ReplacementsCreateManyItemsInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
