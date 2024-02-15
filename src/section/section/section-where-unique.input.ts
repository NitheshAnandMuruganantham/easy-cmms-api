import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SectionWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: bigint | number;
}
