import { handleActions } from 'redux-actions';
import { ProfileActions } from 'app/actions/profile';
import { ProfileModel } from 'app/models';
import { Profile } from 'app/typings';

const initialState: Profile.State = {
  editing: false,
  isSaving: false,
  isLoading: false,
  profileModel: {
    id: 0,
    username: ''
  } as any
};

export const profileReducer = handleActions<Profile.State, ProfileModel>(
  {
    // our actions
    [ProfileActions.Type.LOAD_PROFILE]: (state, action) => {
      return {
        ...{
          isLoading: true,
          profileModel: undefined
        },
        ...state
      };
    },
    [ProfileActions.Type.LOADED_PROFILE]: (state, action) => {
      if (action.payload) {
        return {
          ...{
            isLoading: false,
            profileModel: { ...action.payload }
          },
          ...state
        };
      }
      return state;
    }
  },
  initialState
);
