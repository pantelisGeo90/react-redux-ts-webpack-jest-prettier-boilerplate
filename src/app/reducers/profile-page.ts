import { handleActions } from 'redux-actions';
import { RootState } from '.';
import { ProfileModel, ProfilePageModel } from 'app/models/ProfileModel';
import { ProfileActions } from 'app/actions/profile';

const initialState: RootState.ProfilePageState = {
  isLoading: false,
  isSaving: false,
  isSuccess: false
};

export const profilePageReducer = handleActions<RootState.ProfilePageState, ProfileModel>(
  {
    [ProfileActions.Type.LOADING_PROFILE]: (state, action) => {
      const toState = {
        ...state,
        ...({
          isLoading: true,
          isSaving: false,
          isSuccess: false,
          errorMessage: undefined
        } as ProfilePageModel)
      };
      console.log(toState);

      return toState;
    },
    [ProfileActions.Type.LOADED_PROFILE]: (state, action) => {
      const isSuccess = action.payload && action.payload.id > 0;

      const toState = {
        ...state,
        ...({
          isLoading: false,
          isSuccess: isSuccess,
          isSaving: false,
          errorMessage: ''
        } as ProfilePageModel)
      };
      console.log(toState);
      return toState;
    },
    [ProfileActions.Type.SAVING_PROFILE]: (state, action) => {
      return {
        ...state,
        ...({
          isSaving: true,
          isLoading: false,
          isSuccess: false,
          errorMessage: undefined
        } as ProfilePageModel)
      };
    },
    [ProfileActions.Type.SAVED_PROFILE]: (state, action) => {
      return {
        ...state,
        ...({
          isSaving: false,
          isLoading: false,
          isSuccess: false,
          errorMessage: ''
        } as ProfilePageModel)
      };
    }
  },
  initialState
);
