import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockUpdateWithoutMaintenanceInput } from './block-update-without-maintenance.input';
import { Type } from 'class-transformer';
import { BlockCreateWithoutMaintenanceInput } from './block-create-without-maintenance.input';

@InputType()
export class BlockUpsertWithoutMaintenanceInput {
  @Field(() => BlockUpdateWithoutMaintenanceInput, { nullable: false })
  @Type(() => BlockUpdateWithoutMaintenanceInput)
  update!: BlockUpdateWithoutMaintenanceInput;

  @Field(() => BlockCreateWithoutMaintenanceInput, { nullable: false })
  @Type(() => BlockCreateWithoutMaintenanceInput)
  create!: BlockCreateWithoutMaintenanceInput;
}
