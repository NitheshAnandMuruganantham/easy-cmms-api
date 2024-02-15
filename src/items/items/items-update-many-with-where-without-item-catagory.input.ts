import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsScalarWhereInput } from './items-scalar-where.input';
import { Type } from 'class-transformer';
import { ItemsUpdateManyMutationInput } from './items-update-many-mutation.input';

@InputType()
export class ItemsUpdateManyWithWhereWithoutItemCatagoryInput {
  @Field(() => ItemsScalarWhereInput, { nullable: false })
  @Type(() => ItemsScalarWhereInput)
  where!: ItemsScalarWhereInput;

  @Field(() => ItemsUpdateManyMutationInput, { nullable: false })
  @Type(() => ItemsUpdateManyMutationInput)
  data!: ItemsUpdateManyMutationInput;
}
