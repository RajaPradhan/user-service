import { useReducer } from 'react';

import {
  formSubmissionReducer,
  state as initialFormSubmissionState,
} from '../reducers/formSubmissionReducer';
import { FormSubmissionActionType, UserPayload } from '../types';

const useLogoutUser = () => {
  const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT as string;

  const [formSubmissionState, formSubmissionDispatch] = useReducer(
    formSubmissionReducer,
    initialFormSubmissionState,
  );

  const logoutUser = async () => {
    formSubmissionDispatch({
      type: FormSubmissionActionType.FORM_SUBMISSION_LOADING,
    });

    try {
      const currentUserInfo = await fetch(`${API_ENDPOINT}/api/users/logout`, {
        method: 'post',
        credentials: 'include',
      });

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

  return { logoutUser, formSubmissionState };
};

export default useLogoutUser;
