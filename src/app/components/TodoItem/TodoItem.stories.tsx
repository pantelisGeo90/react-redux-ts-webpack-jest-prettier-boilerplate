import { storiesOf } from '@storybook/react';
import * as React from 'react';
import TodoItem from './index';
import { TodoModel } from '../../../app/models';
import { TodoActions } from '../../../app/actions';

const todo: TodoModel = {
  id: 1,
  completed: false,
  text: 'task yo'
};

const actions = TodoActions;

storiesOf('TodoItem', module).add('empty', () => {
  return (
    <TodoItem
      todo={todo}
      completeTodo={actions.completeTodo}
      deleteTodo={actions.deleteTodo}
      editTodo={actions.editTodo}
    />
  );
});
