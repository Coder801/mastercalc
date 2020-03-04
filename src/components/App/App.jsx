import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../Header";
import Home from "../../views/Home/Home";
import Calculator from "../../views/Calculator";
import Catalog from "../../views/Catalog";
import Choose from "../../views/Choose";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/catalog">
          <Catalog />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/choose">
          <Choose />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
