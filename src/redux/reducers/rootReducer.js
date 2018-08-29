import { combineReducers } from 'redux';
import { APPREDUCER } from './App/AppReducer';
import { AUTHREDUCER } from './Auth/AuthReducer';

export default combineReducers({
  APPREDUCER,
  AUTHREDUCER
});