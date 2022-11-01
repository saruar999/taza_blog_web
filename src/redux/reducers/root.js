import { combineReducers } from 'redux';
import { apiUrl } from './configReducer';
import { user } from './userReducer';

export const rootReducer = combineReducers({
  apiUrl,
  user,
});
