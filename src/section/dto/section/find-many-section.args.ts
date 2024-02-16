import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionWhereInput } from './section-where.input';
import { Type } from 'class-transformer';
import { SectionOrderByWithRelationInput } from './section-order-by-with-relation.input';
import { SectionWhereUniqueInput } from './section-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SectionScalarFieldEnum } from './section-scalar-field.enum';

@ArgsType()
export class FindManySectionArgs {
  @Field(() => SectionWhereInput, { nullable: true })
  @Type(() => SectionWhereInput)
  where?: SectionWhereInput;

  @Field(() => [SectionOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<SectionOrderByWithRelationInput>;

  @Field(() => SectionWhereUniqueInput, { nullable: true })
  cursor?: SectionWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [SectionScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof SectionScalarFieldEnum>;
}
