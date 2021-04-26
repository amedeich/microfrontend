import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Nav from './components/Nav';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ history, isSignedIn, onSignOut }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/">
              <Nav isSignedIn={isSignedIn} onSignOut={onSignOut} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
