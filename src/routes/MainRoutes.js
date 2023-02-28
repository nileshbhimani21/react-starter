import { createBrowserHistory as createHistory } from "history";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../layout";
import Home from '../pages/Home'

const history = createHistory();

const MainRoutes = () => {
  return (
    <BrowserRouter history={history}>
      <Layout>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
      </Layout>
    </BrowserRouter>
  );
};

export default MainRoutes;
