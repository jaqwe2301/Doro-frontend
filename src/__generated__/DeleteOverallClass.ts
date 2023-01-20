/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeleteOverallClassInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteOverallClass
// ====================================================

export interface DeleteOverallClass_DeleteOverallClass {
  __typename: "DeleteOverallClassOutput";
  ok: boolean;
  error: string | null;
}

export interface DeleteOverallClass {
  DeleteOverallClass: DeleteOverallClass_DeleteOverallClass;
}

export interface DeleteOverallClassVariables {
  input: DeleteOverallClassInput;
}
