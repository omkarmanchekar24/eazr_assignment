import {
  Register_Loading,
  Register_User,
  Register_Errors,
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  errors: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Register_Loading:
      return {
        ...state,
        loading: true,
      };
    case Register_User:
      return {
        ...state,
        loading: false,
        errors: {},
      };
    case Register_Errors:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
