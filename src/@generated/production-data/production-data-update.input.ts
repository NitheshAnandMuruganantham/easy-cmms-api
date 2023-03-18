import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UsersUpdateOneRequiredWithoutProduction_dataNestedInput } from '../users/users-update-one-required-without-production-data-nested.input';

@InputType()
export class production_dataUpdateInput {

    @Field(() => BigIntFieldUpdateOperationsInput, {nullable:true})
    id?: BigIntFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    data?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    from?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    to?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UsersUpdateOneRequiredWithoutProduction_dataNestedInput, {nullable:true})
    updatedBy?: UsersUpdateOneRequiredWithoutProduction_dataNestedInput;
}
