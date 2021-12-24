import { combineReducers } from 'redux';
import auth from './auth';
import alerts from './Alert';

export default combineReducers({
  alerts,
  auth,
});