import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemsWhereInput } from './items-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyItemsArgs {
  @Field(() => ItemsWhereInput, { nullable: true })
  @Type(() => ItemsWhereInput)
  where?: ItemsWhereInput;
}
