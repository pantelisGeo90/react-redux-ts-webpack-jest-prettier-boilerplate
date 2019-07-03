import { TodoModel } from './models';
import { TodoActions } from './actions';
import { ProfileModel, ProfilePageModel } from './models/ProfileModel';
import { ProfileActions } from './actions/profile';

export declare namespace TodoItem_Types {
  interface Props {
    todo: TodoModel;
    editTodo: typeof TodoActions.editTodo;
    deleteTodo: typeof TodoActions.deleteTodo;
    completeTodo: typeof TodoActions.completeTodo;
  }

  interface State {
    editing: boolean;
  }
}

export declare namespace TodoTextInput {
  export interface Props {
    text?: string;
    placeholder?: string;
    newTodo?: boolean;
    editing?: boolean;
    onSave: (text: string) => void;
  }

  export interface State {
    text: string;
  }
}

export declare namespace Profile {
  export interface Props {
    profile: ProfileModel;
    profilePage: ProfilePageModel;
    actions: ProfileActions;
  }

  export interface State {
    editing?: boolean;
    isSaving?: boolean;
    isLoading?: boolean;
  }
}

export declare namespace Settings {
  export interface Props {
    // actions: ProfileActions;
  }

  export interface State {
    editing?: boolean;
    isSaving?: boolean;
    isLoading?: boolean;
  }
}
