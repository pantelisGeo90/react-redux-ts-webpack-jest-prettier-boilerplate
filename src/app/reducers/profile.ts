import { handleActions } from 'redux-actions';
import { ProfileModel } from 'app/models/ProfileModel';
import { ProfileActions } from 'app/actions/profile';
import { RootState } from '.';

const initialState: RootState.ProfileState = {
  id: 0,
  username: '',
  age: 0,
  dob: new Date()
};

export const profileReducer = handleActions<RootState.ProfileState, ProfileModel>(
  {
    [ProfileActions.Type.CHANGE_PROFILE]: (state, action) => {
      return (
        {
          ...state,
          ...action.payload
        } || state
      );
    },
    [ProfileActions.Type.LOADING_PROFILE]: (state, action) => {
      return initialState;
    },
    [ProfileActions.Type.LOADED_PROFILE]: (state, action) => {
      return action.payload || state;
    }
  },
  initialState
);
