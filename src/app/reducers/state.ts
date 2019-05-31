import { TodoModel, ProfileModel } from 'app/models';

export interface RootState {
  todos: RootState.TodoState;
  profile: RootState.ProfileState;
  router?: any;
}

export namespace RootState {
  export type TodoState = TodoModel[];
  export type ProfileState = ProfileModel;
}
