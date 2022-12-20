import { createBrowserHistory as createHistory } from "history";
import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Home from '../pages/Home'
const history = createHistory();
const MainRoutes = () => {
  return (
    <Router history={history}>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default MainRoutes;
