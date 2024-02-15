import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../common-dto/prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../common-dto/prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../../common-dto/prisma/date-time-field-update-operations.input';
import { MaintenanceUpdateOneRequiredWithoutReportsNestedInput } from '../../maintanance/maintenance/maintenance-update-one-required-without-reports-nested.input';

@InputType()
export class ReportsUpdateWithoutBlockInput {
  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  id?: BigIntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  report?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  sign?: StringFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  tag?: any;

  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  validated?: BigIntFieldUpdateOperationsInput;

  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  validated_sign?: BigIntFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  created_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updated_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => MaintenanceUpdateOneRequiredWithoutReportsNestedInput, {
    nullable: true,
  })
  maintenance?: MaintenanceUpdateOneRequiredWithoutReportsNestedInput;
}
