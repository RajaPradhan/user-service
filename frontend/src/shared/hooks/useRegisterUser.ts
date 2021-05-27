import { useReducer } from 'react';

import {
  formSubmissionReducer,
  state as initialFormSubmissionState,
} from '../reducers/formSubmissionReducer';
import { FormSubmissionActionType, UserPayload } from '../types';

const useRegisterUser = () => {
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT as string;

  const [formSubmissionState, formSubmissionDispatch] = useReducer(
    formSubmissionReducer,
    initialFormSubmissionState,
  );

  const registerUser = async (userPayload: UserPayload) => {
    formSubmissionDispatch({
      type: FormSubmissionActionType.FORM_SUBMISSION_LOADING,
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

      formSubmissionDispatch({
        type: FormSubmissionActionType.FORM_SUBMISSION_SUCCESS,
        payload,
      });
    } catch (error) {
      formSubmissionDispatch({
        type: FormSubmissionActionType.FORM_SUBMISSION_FAILURE,
      });
    }
  };

  return { registerUser, formSubmissionState };
};

export default useRegisterUser;
