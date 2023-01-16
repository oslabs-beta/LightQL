/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LightQLBackend } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LightQLBackendUpdateFormInputValues = {
    description?: string;
};
export declare type LightQLBackendUpdateFormValidationValues = {
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LightQLBackendUpdateFormOverridesProps = {
    LightQLBackendUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LightQLBackendUpdateFormProps = React.PropsWithChildren<{
    overrides?: LightQLBackendUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    lightQLBackend?: LightQLBackend;
    onSubmit?: (fields: LightQLBackendUpdateFormInputValues) => LightQLBackendUpdateFormInputValues;
    onSuccess?: (fields: LightQLBackendUpdateFormInputValues) => void;
    onError?: (fields: LightQLBackendUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LightQLBackendUpdateFormInputValues) => LightQLBackendUpdateFormInputValues;
    onValidate?: LightQLBackendUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LightQLBackendUpdateForm(props: LightQLBackendUpdateFormProps): React.ReactElement;
