import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Machines } from '../machines/machines.model';
import { SectionCount } from './section-count.output';

@ObjectType()
export class Section {
  @Field(() => ID, { nullable: false })
  id!: bigint;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => [Machines], { nullable: true })
  machines?: Array<Machines>;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: false })
  updated_at!: Date;

  @Field(() => SectionCount, { nullable: false })
  _count?: SectionCount;
}
