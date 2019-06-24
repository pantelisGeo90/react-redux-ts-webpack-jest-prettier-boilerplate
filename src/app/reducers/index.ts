import { combineReducers } from 'redux';
import { RootState } from './state';
import { todoReducer } from './todos';
import { profileReducer } from './profile';
import { profilePageReducer } from './profile-page';

export { RootState };

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<RootState>({
  todos: todoReducer as any,
  profile: profileReducer as any,
  profilePage: profilePageReducer as any
});
