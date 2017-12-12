import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Display from './components/Display';
import Editor from './components/editor/Editor';
import './App.css';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Display} />
      <Route path="/edit" component={Editor} />
    </Switch>
  </BrowserRouter>
);
