/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LightQLBackendCreateFormInputValues = {
    description?: string;
};
export declare type LightQLBackendCreateFormValidationValues = {
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LightQLBackendCreateFormOverridesProps = {
    LightQLBackendCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LightQLBackendCreateFormProps = React.PropsWithChildren<{
    overrides?: LightQLBackendCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LightQLBackendCreateFormInputValues) => LightQLBackendCreateFormInputValues;
    onSuccess?: (fields: LightQLBackendCreateFormInputValues) => void;
    onError?: (fields: LightQLBackendCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LightQLBackendCreateFormInputValues) => LightQLBackendCreateFormInputValues;
    onValidate?: LightQLBackendCreateFormValidationValues;
} & React.CSSProperties>;
export default function LightQLBackendCreateForm(props: LightQLBackendCreateFormProps): React.ReactElement;
