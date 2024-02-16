import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutMaintenanceInput } from './block-create-without-maintenance.input';

@InputType()
export class BlockCreateOrConnectWithoutMaintenanceInput {
  @Field(() => BlockWhereUniqueInput, { nullable: false })
  @Type(() => BlockWhereUniqueInput)
  where!: BlockWhereUniqueInput;

  @Field(() => BlockCreateWithoutMaintenanceInput, { nullable: false })
  @Type(() => BlockCreateWithoutMaintenanceInput)
  create!: BlockCreateWithoutMaintenanceInput;
}
