import {Login_Loading, Login_User, Login_Errors} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  errors: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Login_Loading:
      return {
        ...state,
        loading: true,
        errors: {},
      };
    case Login_User:
      return {
        ...state,
        loading: false,
        errors: {},
      };
    case Login_Errors:
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
