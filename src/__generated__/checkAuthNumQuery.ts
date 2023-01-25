/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CheckAuthNumInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: checkAuthNumQuery
// ====================================================

export interface checkAuthNumQuery_CheckAuthNum {
  __typename: "CheckAuthNumOutput";
  ok: boolean;
  error: string | null;
}

export interface checkAuthNumQuery {
  CheckAuthNum: checkAuthNumQuery_CheckAuthNum;
}

export interface checkAuthNumQueryVariables {
  input: CheckAuthNumInput;
}
