import { createAction } from 'redux-actions';
import { ProfileModel } from 'app/models/ProfileModel';

export namespace ProfileActions {
  export enum Type {
    LOAD_PROFILE = 'LOAD_PROFILE',
    LOADING_PROFILE = 'LOADING_PROFILE',
    LOADED_PROFILE = 'LOADED_PROFILE',
    SAVING_PROFILE = 'SAVING_PROFILE',
    SAVED_PROFILE = 'SAVED_PROFILE'
  }

  export const loadProfile = createAction(Type.LOAD_PROFILE);
  export const loadingProfile = createAction(Type.LOADING_PROFILE);
  export const loadedProfile = createAction(Type.LOADED_PROFILE);
  export const savingProfile = createAction<ProfileModel>(Type.SAVING_PROFILE);
  export const savedProfile = createAction(Type.SAVED_PROFILE);
}

export type TodoActions = Omit<typeof ProfileActions, 'Type'>;
