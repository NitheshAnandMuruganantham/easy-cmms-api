import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../../common-dto/prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../../common-dto/prisma/string-field-update-operations.input';
import { MachinesUncheckedUpdateManyWithoutSection_machines_sectionTosectionNestedInput } from '../../../machines/dto/machines/machines-unchecked-update-many-without-section-machines-section-tosection-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../../../common-dto/prisma/date-time-field-update-operations.input';

@InputType()
export class SectionUncheckedUpdateInput {
  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  id?: BigIntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(
    () =>
      MachinesUncheckedUpdateManyWithoutSection_machines_sectionTosectionNestedInput,
    { nullable: true },
  )
  machines?: MachinesUncheckedUpdateManyWithoutSection_machines_sectionTosectionNestedInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  created_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updated_at?: DateTimeFieldUpdateOperationsInput;
}
