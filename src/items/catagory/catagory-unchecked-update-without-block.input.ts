import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../../common-dto/prisma/big-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../common-dto/prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../../common-dto/prisma/date-time-field-update-operations.input';
import { ItemsUncheckedUpdateManyWithoutCatagoryNestedInput } from '../items/items-unchecked-update-many-without-catagory-nested.input';

@InputType()
export class catagoryUncheckedUpdateWithoutBlockInput {
  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  id?: BigIntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  created_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updated_at?: DateTimeFieldUpdateOperationsInput;

  @Field(() => ItemsUncheckedUpdateManyWithoutCatagoryNestedInput, {
    nullable: true,
  })
  items?: ItemsUncheckedUpdateManyWithoutCatagoryNestedInput;
}
