import { createBrowserHistory as createHistory } from "history";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Form from "../pages/Form";
import Home from '../pages/Home'
import Shop from "../pages/Shop";

const history = createHistory();

const MainRoutes = () => {
  return (
    <BrowserRouter history={history}>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop/:id" component={Shop} />
          <Route path="/form" component={Form} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default MainRoutes;
