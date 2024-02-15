import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemsCreateManyInput } from './items-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyItemsArgs {
  @Field(() => [ItemsCreateManyInput], { nullable: false })
  @Type(() => ItemsCreateManyInput)
  data!: Array<ItemsCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
