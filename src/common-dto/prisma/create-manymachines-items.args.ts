import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machines_itemsCreateManyInput } from '../../machines/machines-items/machines-items-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManymachinesItemsArgs {
  @Field(() => [machines_itemsCreateManyInput], { nullable: false })
  @Type(() => machines_itemsCreateManyInput)
  data!: Array<machines_itemsCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
