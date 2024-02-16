import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateWithoutMaintenanceInput } from './machines-create-without-maintenance.input';
import { Type } from 'class-transformer';
import { MachinesCreateOrConnectWithoutMaintenanceInput } from './machines-create-or-connect-without-maintenance.input';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';

@InputType()
export class MachinesCreateNestedOneWithoutMaintenanceInput {
  @Field(() => MachinesCreateWithoutMaintenanceInput, { nullable: true })
  @Type(() => MachinesCreateWithoutMaintenanceInput)
  create?: MachinesCreateWithoutMaintenanceInput;

  @Field(() => MachinesCreateOrConnectWithoutMaintenanceInput, {
    nullable: true,
  })
  @Type(() => MachinesCreateOrConnectWithoutMaintenanceInput)
  connectOrCreate?: MachinesCreateOrConnectWithoutMaintenanceInput;

  @Field(() => MachinesWhereUniqueInput, { nullable: true })
  @Type(() => MachinesWhereUniqueInput)
  connect?: MachinesWhereUniqueInput;
}
