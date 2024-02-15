import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlockCreateWithoutMaintenanceInput } from './block-create-without-maintenance.input';
import { Type } from 'class-transformer';
import { BlockCreateOrConnectWithoutMaintenanceInput } from './block-create-or-connect-without-maintenance.input';
import { BlockUpsertWithoutMaintenanceInput } from './block-upsert-without-maintenance.input';
import { BlockWhereUniqueInput } from './block-where-unique.input';
import { BlockUpdateWithoutMaintenanceInput } from './block-update-without-maintenance.input';

@InputType()
export class BlockUpdateOneRequiredWithoutMaintenanceNestedInput {
  @Field(() => BlockCreateWithoutMaintenanceInput, { nullable: true })
  @Type(() => BlockCreateWithoutMaintenanceInput)
  create?: BlockCreateWithoutMaintenanceInput;

  @Field(() => BlockCreateOrConnectWithoutMaintenanceInput, { nullable: true })
  @Type(() => BlockCreateOrConnectWithoutMaintenanceInput)
  connectOrCreate?: BlockCreateOrConnectWithoutMaintenanceInput;

  @Field(() => BlockUpsertWithoutMaintenanceInput, { nullable: true })
  @Type(() => BlockUpsertWithoutMaintenanceInput)
  upsert?: BlockUpsertWithoutMaintenanceInput;

  @Field(() => BlockWhereUniqueInput, { nullable: true })
  @Type(() => BlockWhereUniqueInput)
  connect?: BlockWhereUniqueInput;

  @Field(() => BlockUpdateWithoutMaintenanceInput, { nullable: true })
  @Type(() => BlockUpdateWithoutMaintenanceInput)
  update?: BlockUpdateWithoutMaintenanceInput;
}
