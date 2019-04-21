import { TodoModel } from "./models";
import { TodoActions } from "./actions";

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
  