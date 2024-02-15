import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../common-dto/prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../common-dto/prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { MaintenanceUpdateOneRequiredWithoutReportsNestedInput } from '../../maintanance/maintenance/maintenance-update-one-required-without-reports-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../../common-dto/prisma/date-time-field-update-operations.input';

@InputType()
export class ReportUpdateInput {
  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  id?: BigIntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  sign?: StringFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  tag?: any;

  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  validated?: BigIntFieldUpdateOperationsInput;

  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  validated_sign?: BigIntFieldUpdateOperationsInput;

  @Field(() => MaintenanceUpdateOneRequiredWithoutReportsNestedInput, {
    nullable: true,
  })
  maintenance?: MaintenanceUpdateOneRequiredWithoutReportsNestedInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  created_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updated_at?: DateTimeFieldUpdateOperationsInput;
}
