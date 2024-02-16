import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { MachinesCreateNestedManyWithoutSectionInput } from '../../../machines/dto/machines/machines-create-nested-many-without-section.input';
import { BlockCreateNestedOneWithoutSectionsInput } from '../../../block/dto/block/block-create-nested-one-without-sections.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SectionsCreateInput {
  @Field(() => GraphQLBigInt, { nullable: true })
  id?: bigint | number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => MachinesCreateNestedManyWithoutSectionInput, { nullable: true })
  machines?: MachinesCreateNestedManyWithoutSectionInput;

  @HideField()
  block!: BlockCreateNestedOneWithoutSectionsInput;
}
