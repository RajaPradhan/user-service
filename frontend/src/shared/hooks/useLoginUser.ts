import { RequestActionType, UserPayload, RequestDispatch } from '../types';

const useLoginUser = (currentUserInfoDispatch: RequestDispatch) => {
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT as string;

  const loginUser = async (userPayload: UserPayload) => {
    currentUserInfoDispatch({
      type: RequestActionType.REQUEST_LOADING,
    });

    try {
      const currentUserInfo = await fetch(`${API_ENDPOINT}/api/users/login`, {
        method: 'post',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userPayload),
      });

      const payload = await currentUserInfo.json();

      currentUserInfoDispatch({
        type: RequestActionType.REQUEST_SUCCESS,
        payload,
      });
    } catch (error) {
      currentUserInfoDispatch({
        type: RequestActionType.REQUEST_FAILURE,
      });
    }
  };

  return { loginUser };
};

export default useLoginUser;
