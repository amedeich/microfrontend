import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
// import { createBrowserHistory } from 'history';

import { history } from "./history";

import Progress from "./components/Progress";
import Header from "./components/Header";
import HeaderApp from "./components/HeaderApp";

const HomeLazy = lazy(() => import("./components/Home"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
// const HeaderLazy = lazy(() => import('./components/HeaderApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

// const history = createBrowserHistory();

const user = {
  name: "Alvaro Medina",
};

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/");
    }
  }, [isSignedIn]);

  const routes = (
    <Suspense fallback={<Progress />}>
      <Switch>
        <Route path="/auth">
          <AuthLazy onSignIn={() => setIsSignedIn(true)} />
        </Route>
        <Route path="/">
          <HomeLazy isSignedIn={isSignedIn} user={user} />
        </Route>
      </Switch>
    </Suspense>
  );

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <HeaderApp
            isSignedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          {/* <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          /> */}    
          {routes}
        </div>
      </StylesProvider>
    </Router>
  );
};
