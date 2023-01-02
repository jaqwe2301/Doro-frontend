/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateEduInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: CreateEdu
// ====================================================

export interface CreateEdu_CreateEdu {
  __typename: "CreateEduOutput";
  error: string | null;
  ok: boolean;
}

export interface CreateEdu {
  CreateEdu: CreateEdu_CreateEdu;
}

export interface CreateEduVariables {
  input: CreateEduInput;
}
