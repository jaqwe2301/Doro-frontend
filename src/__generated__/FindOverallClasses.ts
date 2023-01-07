/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FindOverallClassesInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: FindOverallClasses
// ====================================================

export interface FindOverallClasses_FindOverallClasses_overallClasses_client {
  __typename: "Client";
  institution_name: string;
}

export interface FindOverallClasses_FindOverallClasses_overallClasses {
  __typename: "Overall_Classes_Output_Item";
  createdAt: any;
  id: number;
  client: FindOverallClasses_FindOverallClasses_overallClasses_client;
}

export interface FindOverallClasses_FindOverallClasses {
  __typename: "FindOverallClassesOutput";
  ok: boolean;
  error: string | null;
  overallClasses: FindOverallClasses_FindOverallClasses_overallClasses[] | null;
}

export interface FindOverallClasses {
  FindOverallClasses: FindOverallClasses_FindOverallClasses;
}

export interface FindOverallClassesVariables {
  input: FindOverallClassesInput;
}
