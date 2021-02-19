import React, { Fragment } from "react";
import "./App.scss";
import "./assets/css/animate.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./components/routing/Routes";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import NavBar from "./components/nav-bar.component";
import Footer from "./components/footer.component";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Fragment>
          <div className="">
            <NavBar></NavBar>
            <Switch>
              <Route component={Routes} />
            </Switch>
            <Footer></Footer>
          </div>
        </Fragment>
      </Router>
    </Fragment>
  );
};

export default App;
