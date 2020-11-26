import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  auth: authReducer,
});

export default rootReducer;
