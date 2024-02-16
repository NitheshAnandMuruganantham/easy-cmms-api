import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machines_itemsCreateManyBlockInput } from './machines-items-create-many-block.input';
import { Type } from 'class-transformer';

@InputType()
export class machines_itemsCreateManyBlockInputEnvelope {
  @Field(() => [machines_itemsCreateManyBlockInput], { nullable: false })
  @Type(() => machines_itemsCreateManyBlockInput)
  data!: Array<machines_itemsCreateManyBlockInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
