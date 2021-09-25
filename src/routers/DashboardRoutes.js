import React from "react";
import {Redirect, Route, Switch} from "react-router";

import {DcScreen} from "../components/dc/DcScreen";
import {HeroScreen} from "../components/heroes/HeroScreen";
import {MarvelScreen} from "../components/marvel/MarvelScreen";
import {SearchScreen} from "../components/search/SearchScreen";
import {Navbar} from "../components/ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <Switch>
          <Route exact component={MarvelScreen} path="/marvel" />
          <Route exact component={DcScreen} path="/dc" />
          <Route exact component={HeroScreen} path="/hero/:heroId" />
          <Route exact component={SearchScreen} path="/search" />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
