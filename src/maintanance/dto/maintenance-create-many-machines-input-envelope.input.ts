import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceCreateManyMachinesInput } from './maintenance-create-many-machines.input';
import { Type } from 'class-transformer';

@InputType()
export class MaintenanceCreateManyMachinesInputEnvelope {
  @Field(() => [MaintenanceCreateManyMachinesInput], { nullable: false })
  @Type(() => MaintenanceCreateManyMachinesInput)
  data!: Array<MaintenanceCreateManyMachinesInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
