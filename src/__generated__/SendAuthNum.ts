/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SendAuthNumInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SendAuthNum
// ====================================================

export interface SendAuthNum_SendAuthNum {
  __typename: "SendAuthNumOutput";
  error: string | null;
  ok: boolean;
}

export interface SendAuthNum {
  SendAuthNum: SendAuthNum_SendAuthNum;
}

export interface SendAuthNumVariables {
  input: SendAuthNumInput;
}
