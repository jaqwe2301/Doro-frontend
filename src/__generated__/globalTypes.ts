/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum UserRole {
  Client = "Client",
  Manager = "Manager",
}

export enum sendOption {
  auth = "auth",
  mypage = "mypage",
}

export interface CheckAuthNumInput {
  authNum: string;
  phoneNumber: string;
}

export interface CheckPasswordInput {
  password?: string | null;
  postId: number;
}

export interface CreateCommentInput {
  content: string;
  postId: number;
}

export interface CreateEduInput {
  name: string;
  institution_name: string;
  position: string;
  phone_number: string;
  email: string;
  student_count: number;
  school_rank: string;
  budget: number;
  overall_remark?: string | null;
  detail_classes: Detail_class_item[];
}

export interface CreatePostInput {
  title: string;
  content: string;
  password?: string | null;
  isLocked?: boolean | null;
  ownerName: string;
  phoneNumber: string;
  email?: string | null;
  institution?: string | null;
}

export interface CreateUserInput {
  email: string;
  password: string;
  name: string;
  institution: string;
  phoneNumber: string;
  place: string;
  rank?: string | null;
  role: UserRole;
}

export interface DeleteOverallClassInput {
  overallClassId: number;
}

export interface DeletePostInput {
  postId: number;
}

export interface Detail_class_item {
  class_name: string;
  edu_concept: string;
  student_number: number;
  date: string;
  remark?: string | null;
  unfixed: boolean;
}

export interface FindAllCommentsInput {
  postId: number;
}

export interface FindAllPostsInput {
  page?: number | null;
}

export interface FindOverallClassesInput {
  phone_number: string;
  name: string;
}

export interface FindPostInput {
  postId: number;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface SendAuthNumInput {
  name: string;
  phoneNumber: string;
  Option: sendOption;
}

export interface UpdatePostInput {
  id: number;
  title: string;
  content: string;
  password?: string | null;
  isLocked?: boolean | null;
  ownerName: string;
  phoneNumber: string;
  email?: string | null;
  institution?: string | null;
}

export interface editUserInput {
  email?: string | null;
  password?: string | null;
  name?: string | null;
  institution?: string | null;
  phoneNumber?: string | null;
  place?: string | null;
  rank?: string | null;
  role?: UserRole | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
