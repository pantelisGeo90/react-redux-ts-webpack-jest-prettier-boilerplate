import { combineReducers } from 'redux';
import { RootState } from './state';
import { todoReducer } from './todos';
import { profileReducer } from './profile';

export { RootState };

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<RootState>({
  todos: todoReducer as any,
  profile: profileReducer as any
});
