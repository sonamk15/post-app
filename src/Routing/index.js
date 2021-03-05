import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomePage from "../Pages/HomePage";
import FavoritePage from "../Pages/FavoritePage";

const Routing = () => {
    return (
        <Router history={createBrowserHistory()}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/favorite" component={FavoritePage} />
          </Switch>
        </Router>
      );
}

export default Routing;
