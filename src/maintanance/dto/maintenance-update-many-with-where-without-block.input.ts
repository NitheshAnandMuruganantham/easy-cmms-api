import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceScalarWhereInput } from './maintenance-scalar-where.input';
import { Type } from 'class-transformer';
import { MaintenanceUpdateManyMutationInput } from './maintenance-update-many-mutation.input';

@InputType()
export class MaintenanceUpdateManyWithWhereWithoutBlockInput {
  @Field(() => MaintenanceScalarWhereInput, { nullable: false })
  @Type(() => MaintenanceScalarWhereInput)
  where!: MaintenanceScalarWhereInput;

  @Field(() => MaintenanceUpdateManyMutationInput, { nullable: false })
  @Type(() => MaintenanceUpdateManyMutationInput)
  data!: MaintenanceUpdateManyMutationInput;
}
