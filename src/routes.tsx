import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import FunFact from "./components/Funcfact/FunFact";
import Todo from "./components/Todo/Todo";
const Routes: React.SFC = () => (
  <div>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Navbar>
            <HomePage />
             <FunFact/>
             {/* <Todo/> */}
          </Navbar>
        )}
      />
      <Route
        path="/cart"
        render={() => (
          <Navbar>
            <Cart />
          </Navbar>
        )}
      />
    </Switch>
  </div>
);

export default Routes;
