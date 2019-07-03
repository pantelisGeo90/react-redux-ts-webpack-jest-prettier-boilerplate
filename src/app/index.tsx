import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { App as TodoApp } from 'app/containers/App';
import Profile from 'app/components/Profile';
import NavBar from 'app/components/NavBar';
import Settings from './components/Settings';

export const App = hot(module)(() => (
  <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={TodoApp} />
      <Route path="/profile" component={Profile} />
      <Route path="/settings" component={Settings} />
    </Switch>
  </>
));
