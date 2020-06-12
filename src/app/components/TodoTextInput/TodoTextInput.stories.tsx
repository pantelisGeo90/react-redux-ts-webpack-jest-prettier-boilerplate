import { storiesOf } from '@storybook/react';
import * as React from 'react';
import TodoTextInput from './TodoTextInput';

storiesOf('TodoTextInput', module).add('empty', () => {
  return (
    <TodoTextInput
      onSave={() => {
        console.log('heey');
      }}
    />
  );
});
