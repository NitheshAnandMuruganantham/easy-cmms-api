import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateNestedManyWithoutSection_machines_sectionTosectionInput } from '../../../machines/dto/machines/machines-create-nested-many-without-section-machines-section-tosection.input';

@InputType()
export class SectionCreateInput {
  @Field(() => String, { nullable: true })
  id?: bigint | number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(
    () => MachinesCreateNestedManyWithoutSection_machines_sectionTosectionInput,
    { nullable: true },
  )
  machines?: MachinesCreateNestedManyWithoutSection_machines_sectionTosectionInput;

  @Field(() => Date, { nullable: true })
  created_at?: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;
}
