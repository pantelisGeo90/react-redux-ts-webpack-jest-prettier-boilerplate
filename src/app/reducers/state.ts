import { TodoModel } from 'app/models';
import { ProfileModel, ProfilePageModel } from 'app/models/ProfileModel';

export interface RootState {
  todos: RootState.TodoState;
  profile?: RootState.ProfileState;
  profilePage: RootState.ProfilePageState;
  router?: any;
}

export namespace RootState {
  export type TodoState = TodoModel[];
  export type ProfileState = ProfileModel;
  export type ProfilePageState = ProfilePageModel;
}
