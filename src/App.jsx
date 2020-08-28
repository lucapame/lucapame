import React, { Fragment } from "react";
import "./App.scss";
import "./assets/css/animate.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./components/routing/Routes";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Fragment>
          <Switch>
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Fragment>
  );
};

export default App;
