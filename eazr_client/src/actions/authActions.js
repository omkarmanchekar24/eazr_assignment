import {
  Register_User,
  Register_Errors,
  Register_Loading,
  Login_User,
  Login_Errors,
  Login_Loading,
  SET_CURRENT_USER,
} from './types';
import {ToastAndroid} from 'react-native';
import axios from 'axios';
import {ip} from '../config/config';
import {Actions} from 'react-native-router-flux';
import jwt_decode from 'jwt-decode';

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
        ToastAndroid.show('Registered Successfully!', ToastAndroid.LONG);
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
  return (dispatch) => {
    dispatch(loginLoading());

    axios
      .post(`${ip}/api/users/login`, data)
      .then((res) => {
        const {token} = res.data;

        //Decode token to get user data
        const decoded = jwt_decode(token);

        //Set current user
        dispatch(setCurrentUser(decoded, token));

        dispatch({
          type: Login_User,
          payload: res.data,
        });
        Actions.welcome();
        ToastAndroid.show('Logged in successfully!', ToastAndroid.LONG);
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

export const loginLoading = () => {
  return {
    type: Login_Loading,
  };
};

//Set logged in user
export const setCurrentUser = (decoded, token) => {
  return {
    type: SET_CURRENT_USER,
    payload: {decoded, token},
  };
};
