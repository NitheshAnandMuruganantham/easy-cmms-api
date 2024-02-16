import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaintenanceWhereUniqueInput } from './maintenance-where-unique.input';
import { Type } from 'class-transformer';
import { MaintenanceUpdateWithoutBlockInput } from './maintenance-update-without-block.input';

@InputType()
export class MaintenanceUpdateWithWhereUniqueWithoutBlockInput {
  @Field(() => MaintenanceWhereUniqueInput, { nullable: false })
  @Type(() => MaintenanceWhereUniqueInput)
  where!: MaintenanceWhereUniqueInput;

  @Field(() => MaintenanceUpdateWithoutBlockInput, { nullable: false })
  @Type(() => MaintenanceUpdateWithoutBlockInput)
  data!: MaintenanceUpdateWithoutBlockInput;
}
