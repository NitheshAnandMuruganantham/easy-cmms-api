import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { machines_itemsWhereUniqueInput } from '../../machines/dto/machines-items/machines-items-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquemachinesItemsOrThrowArgs {
  @Field(() => machines_itemsWhereUniqueInput, { nullable: false })
  @Type(() => machines_itemsWhereUniqueInput)
  where!: machines_itemsWhereUniqueInput;
}
