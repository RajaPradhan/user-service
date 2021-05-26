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
