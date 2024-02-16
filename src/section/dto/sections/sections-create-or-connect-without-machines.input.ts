import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SectionsWhereUniqueInput } from './sections-where-unique.input';
import { Type } from 'class-transformer';
import { SectionsCreateWithoutMachinesInput } from './sections-create-without-machines.input';

@InputType()
export class SectionsCreateOrConnectWithoutMachinesInput {
  @Field(() => SectionsWhereUniqueInput, { nullable: false })
  @Type(() => SectionsWhereUniqueInput)
  where!: SectionsWhereUniqueInput;

  @Field(() => SectionsCreateWithoutMachinesInput, { nullable: false })
  @Type(() => SectionsCreateWithoutMachinesInput)
  create!: SectionsCreateWithoutMachinesInput;
}
