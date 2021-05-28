import { RequestActionType, RequestDispatch } from '../types';

const useLogoutUser = (currentUserInfoDispatch: RequestDispatch) => {
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT as string;

  const logoutUser = async () => {
    currentUserInfoDispatch({
      type: RequestActionType.REQUEST_LOADING,
    });

    try {
      const currentUserInfo = await fetch(`${API_ENDPOINT}/api/users/logout`, {
        method: 'post',
        credentials: 'include',
      });

      const payload = await currentUserInfo.json();

      currentUserInfoDispatch({
        type: RequestActionType.REQUEST_SUCCESS,
        payload,
      });
      //   Promise.resolve();
    } catch (error) {
      currentUserInfoDispatch({
        type: RequestActionType.REQUEST_FAILURE,
      });

      //   Promise.reject();
    }
  };

  return { logoutUser };
};

export default useLogoutUser;
