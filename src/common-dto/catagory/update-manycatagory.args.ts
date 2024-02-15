import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { catagoryUpdateManyMutationInput } from './catagory-update-many-mutation.input';
import { Type } from 'class-transformer';
import { catagoryWhereInput } from './catagory-where.input';

@ArgsType()
export class UpdateManycatagoryArgs {
  @Field(() => catagoryUpdateManyMutationInput, { nullable: false })
  @Type(() => catagoryUpdateManyMutationInput)
  data!: catagoryUpdateManyMutationInput;

  @Field(() => catagoryWhereInput, { nullable: true })
  @Type(() => catagoryWhereInput)
  where?: catagoryWhereInput;
}
