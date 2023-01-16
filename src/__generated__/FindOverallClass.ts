/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FindOverallClassInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: FindOverallClass
// ====================================================

export interface FindOverallClass_FindOverallClass_overallClass_client {
  __typename: "Client";
  name: string;
  institution_name: string;
  position: string;
  phone_number: string;
  email: string;
}

export interface FindOverallClass_FindOverallClass_overallClass_Detail_class_infos {
  __typename: "Detail_class_info";
  class_name: string;
  edu_concept: string;
  student_number: number;
  date: any[];
  remark: string | null;
  unfixed: boolean;
}

export interface FindOverallClass_FindOverallClass_overallClass {
  __typename: "Overall_class_info";
  student_count: number;
  school_rank: string;
  budget: number;
  overall_remark: string | null;
  client: FindOverallClass_FindOverallClass_overallClass_client;
  Detail_class_infos: FindOverallClass_FindOverallClass_overallClass_Detail_class_infos[];
}

export interface FindOverallClass_FindOverallClass {
  __typename: "FindOverallClassOutput";
  overallClass: FindOverallClass_FindOverallClass_overallClass | null;
}

export interface FindOverallClass {
  FindOverallClass: FindOverallClass_FindOverallClass;
}

export interface FindOverallClassVariables {
  input: FindOverallClassInput;
}
