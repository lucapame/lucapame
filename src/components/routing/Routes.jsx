import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../../pages/landing/Landing.page";
import SowcasePage from "../../pages/showcase/Showcase.page";

const Routes = () => {
  return (
    <section>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/showcase" component={SowcasePage} />
      </Switch>
    </section>
  );
};

export default Routes;
