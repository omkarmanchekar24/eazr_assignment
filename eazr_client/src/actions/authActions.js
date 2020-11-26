import {
  Register_User,
  Register_Errors,
  Register_Loading,
  Login_User,
  Login_Errors,
} from './types';
import axios from 'axios';
import {ip} from '../config/config';
import {Actions} from 'react-native-router-flux';

export const register = (data) => {
  console.log('called');
  return (dispatch) => {
    dispatch(registerLoading());

    axios
      .post(`${ip}/api/users/register`, data)
      .then((res) => {
        dispatch({
          type: Register_User,
          payload: res.data,
        });
        Actions.login();
      })
      .catch((err) => {
        dispatch({
          type: Register_Errors,
          payload: err.response.data,
        });
      });
  };
};

export const login = (data) => {
  console.log('called');
  return (dispatch) => {
    dispatch(loginLoading());

    axios
      .post(`${ip}/api/users/login`, data)
      .then((res) => {
        dispatch({
          type: Login_User,
          payload: res.data,
        });
        Actions.landing();
      })
      .catch((err) => {
        dispatch({
          type: Login_Errors,
          payload: err.response.data,
        });
      });
  };
};

export const registerLoading = () => {
  return {
    type: Register_Loading,
  };
};
