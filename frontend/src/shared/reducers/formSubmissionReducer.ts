import {
  FormSubmissionState,
  FormSubmissionAction,
  FormSubmissionActionType,
} from '../types';

const state: FormSubmissionState = {
  data: null,
  loading: false,
  error: null,
};

const formSubmissionReducer = (
  state: FormSubmissionState,
  action: FormSubmissionAction,
) => {
  switch (action.type) {
    case FormSubmissionActionType.FORM_SUBMISSION_LOADING: {
      return { ...state, loading: true };
    }
    case FormSubmissionActionType.FORM_SUBMISSION_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case FormSubmissionActionType.FORM_SUBMISSION_FAILURE: {
      return {
        ...state,
        loading: false,
        data: null,
        error: new Error('Failed to submit form'),
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export { formSubmissionReducer, state };
