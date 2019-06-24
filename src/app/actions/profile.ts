import { createAction } from 'redux-actions';
import { ProfileModel } from 'app/models/ProfileModel';

export namespace ProfileActions {
  export enum Type {
    LOAD_PROFILE = 'LOAD_PROFILE',
    LOADING_PROFILE = 'LOADING_PROFILE',
    LOADED_PROFILE = 'LOADED_PROFILE',
    SAVE_PROFILE = 'SAVE_PROFILE',
    SAVING_PROFILE = 'SAVING_PROFILE',
    SAVED_PROFILE = 'SAVED_PROFILE',
    CHANGE_PROFILE = 'CHANGE_PROFILE'
  }

  export const loadProfile = createAction(Type.LOAD_PROFILE);
  export const loadingProfile = createAction(Type.LOADING_PROFILE);
  export const loadedProfile = createAction<ProfileModel>(Type.LOADED_PROFILE);
  export const saveProfile = createAction<ProfileModel>(Type.SAVE_PROFILE);
  export const savingProfile = createAction(Type.SAVING_PROFILE);
  export const savedProfile = createAction(Type.SAVED_PROFILE);
  export const changeProfile = createAction<ProfileModel>(Type.CHANGE_PROFILE);
}

export type ProfileActions = Omit<typeof ProfileActions, 'Type'>;
