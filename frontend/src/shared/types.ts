export interface CurrentUserInfo {
  id: number;
  fullName: string;
  email: string;
}

export interface CurrentUserInfoState {
  data: CurrentUserInfo | null;
  loading: boolean;
  error: Error | null;
}

export enum CurrentUserInfoActionType {
  GET_CURRENT_USER_INFO_LOADING = 'GET_CURRENT_USER_INFO_LOADING',
  GET_CURRENT_USER_INFO_SUCCESS = 'GET_CURRENT_USER_INFO_SUCCESS',
  GET_CURRENT_USER_INFO_FAILURE = 'GET_CURRENT_USER_INFO_FAILURE',
}

export interface CurrentUserInfoAction {
  type:
    | 'GET_CURRENT_USER_INFO_LOADING'
    | 'GET_CURRENT_USER_INFO_SUCCESS'
    | 'GET_CURRENT_USER_INFO_FAILURE';
  payload?: any;
}

export type CurrentUserInfoDispatch = (action: CurrentUserInfoAction) => void;

export interface UserPayload {
  fullName?: string;
  email: string;
  password: string;
}

export interface FormSubmissionState {
  data: CurrentUserInfo | null;
  loading: boolean;
  error: Error | null;
}

export enum FormSubmissionActionType {
  FORM_SUBMISSION_LOADING = 'FORM_SUBMISSION_LOADING',
  FORM_SUBMISSION_SUCCESS = 'FORM_SUBMISSION_SUCCESS',
  FORM_SUBMISSION_FAILURE = 'FORM_SUBMISSION_FAILURE',
}

export interface FormSubmissionAction {
  type:
    | 'FORM_SUBMISSION_LOADING'
    | 'FORM_SUBMISSION_SUCCESS'
    | 'FORM_SUBMISSION_FAILURE';
  payload?: any;
}

export type FormSubmissionDispatch = (action: FormSubmissionAction) => void;
