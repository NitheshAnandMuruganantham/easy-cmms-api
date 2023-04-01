import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UsersUpdateOneRequiredWithoutProduction_dataNestedInput } from '../users/users-update-one-required-without-production-data-nested.input';
import { BlockUpdateOneWithoutProduction_dataNestedInput } from '../block/block-update-one-without-production-data-nested.input';

@InputType()
export class production_dataUpdateInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    id?: BigIntFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    production?: any;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    shift?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    date?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UsersUpdateOneRequiredWithoutProduction_dataNestedInput, {nullable:true})
    updatedBy?: UsersUpdateOneRequiredWithoutProduction_dataNestedInput;

    @Field(() => BlockUpdateOneWithoutProduction_dataNestedInput, {nullable:true})
    Block?: BlockUpdateOneWithoutProduction_dataNestedInput;
}
