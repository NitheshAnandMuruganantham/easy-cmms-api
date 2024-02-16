import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateManyBlockInput } from './items-create-many-block.input';
import { Type } from 'class-transformer';

@InputType()
export class ItemsCreateManyBlockInputEnvelope {
  @Field(() => [ItemsCreateManyBlockInput], { nullable: false })
  @Type(() => ItemsCreateManyBlockInput)
  data!: Array<ItemsCreateManyBlockInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
