import { useReducer } from 'react';

import useCurrentUserInfoReducer from './useCurrentUserInfoReducer';
import { CurrentUserInfoActionType } from '../types';

const useGetCurrentUserInfo = () => {
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT as string;
  const { currentUserInfoReducer, state: initialCurrentUserInfoState } =
    useCurrentUserInfoReducer();
  const [currentUserInfoState, currentUserInfoDispatch] = useReducer(
    currentUserInfoReducer,
    initialCurrentUserInfoState,
  );

  const getCurrentUserInfo = async () => {
    currentUserInfoDispatch({
      type: CurrentUserInfoActionType.GET_CURRENT_USER_INFO_LOADING,
    });
    try {
      const currentUserInfo = await fetch(
        `${API_ENDPOINT}/api/users/currentuser`,
        {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const payload = await currentUserInfo.json();
      currentUserInfoDispatch({
        type: CurrentUserInfoActionType.GET_CURRENT_USER_INFO_SUCCESS,
        payload,
      });
    } catch (error) {
      currentUserInfoDispatch({
        type: CurrentUserInfoActionType.GET_CURRENT_USER_INFO_FAILURE,
      });
    }
  };

  return { getCurrentUserInfo, currentUserInfoState };
};

export default useGetCurrentUserInfo;
