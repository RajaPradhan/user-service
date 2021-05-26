import {
  CurrentUserInfoState,
  CurrentUserInfoAction,
  CurrentUserInfoActionType,
} from '../types';

const useCurrentUserInfoReducer = () => {
  const state: CurrentUserInfoState = {
    data: null,
    loading: false,
    error: null,
  };

  const currentUserInfoReducer = (
    state: CurrentUserInfoState,
    action: CurrentUserInfoAction,
  ) => {
    switch (action.type) {
      case CurrentUserInfoActionType.GET_CURRENT_USER_INFO_LOADING: {
        return { ...state, loading: true };
      }
      case CurrentUserInfoActionType.GET_CURRENT_USER_INFO_SUCCESS: {
        return { ...state, loading: false, data: action.payload };
      }
      case CurrentUserInfoActionType.GET_CURRENT_USER_INFO_FAILURE: {
        return {
          ...state,
          loading: false,
          data: null,
          error: new Error('Failed to get currentUser info'),
        };
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`);
      }
    }
  };
  return { currentUserInfoReducer, state };
};

export default useCurrentUserInfoReducer;
