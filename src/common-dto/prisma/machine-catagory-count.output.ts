import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Machine_catagoryCount {
  @Field(() => Int, { nullable: false })
  machines!: number;
}
