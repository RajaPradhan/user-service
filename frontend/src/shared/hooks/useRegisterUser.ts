import { RequestActionType, UserPayload, RequestDispatch } from '../types';

const useRegisterUser = (currentUserInfoDispatch: RequestDispatch) => {
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT as string;

  const registerUser = async (userPayload: UserPayload) => {
    currentUserInfoDispatch({
      type: RequestActionType.REQUEST_LOADING,
    });

    try {
      const currentUserInfo = await fetch(
        `${API_ENDPOINT}/api/users/register`,
        {
          method: 'post',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userPayload),
        },
      );

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

  return { registerUser };
};

export default useRegisterUser;
