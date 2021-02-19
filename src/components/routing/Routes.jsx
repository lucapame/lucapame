import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "../../pages/landing/Landing.page";
import FitnesssApp from "../../pages/detail_pages/FitnessApp.page";
import UachSegaPage from "../../pages/detail_pages/uach-sega.page";
import LolBoostingSite from "../../pages/detail_pages/lol_boosting.page";
import FreedomSchool from "../../pages/detail_pages/freedom-school.page";
import PlacesApp from "../../pages/detail_pages/places-app.page";
import ContactPage from "../../pages/info_pages/contact.page";
import Resume from "../../pages/info_pages/resume.page";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/fitness-app" component={FitnesssApp} />
      <Route exact path="/uach-sega" component={UachSegaPage} />
      <Route exact path="/lol-boosting" component={LolBoostingSite} />
      <Route exact path="/freedom-school" component={FreedomSchool} />
      <Route exact path="/places-app" component={PlacesApp} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/resume" component={Resume} />
    </Switch>
  );
};

export default Routes;
