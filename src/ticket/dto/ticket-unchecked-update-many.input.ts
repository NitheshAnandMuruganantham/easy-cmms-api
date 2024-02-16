import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../common-dto/prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../common-dto/prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableBigIntFieldUpdateOperationsInput } from '../../common-dto/prisma/nullable-big-int-field-update-operations.input';
import { Enumticket_statusFieldUpdateOperationsInput } from '../../common-dto/prisma/enumticket-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../../common-dto/prisma/date-time-field-update-operations.input';

@InputType()
export class TicketUncheckedUpdateManyInput {
  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  id?: BigIntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  description?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  photos?: StringFieldUpdateOperationsInput;

  @HideField()
  user_id?: BigIntFieldUpdateOperationsInput;

  @Field(() => NullableBigIntFieldUpdateOperationsInput, { nullable: true })
  maintenance_id?: NullableBigIntFieldUpdateOperationsInput;

  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  machine_id?: BigIntFieldUpdateOperationsInput;

  @Field(() => Enumticket_statusFieldUpdateOperationsInput, { nullable: true })
  status?: Enumticket_statusFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  created_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updated_at?: DateTimeFieldUpdateOperationsInput;

  @HideField()
  block_id?: BigIntFieldUpdateOperationsInput;
}
