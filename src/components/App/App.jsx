import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "@/constants/theme";

import Header from "@/components/Header/Header";

import Home from "@/views/Home/Home";
import Calculator from "@/views/Calculator/Calculator";
// import Catalog from "@/views/Catalog/Catalog";
// import Choose from "@/views/Choose/Choose";

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
        {/* 
        <Route path="/catalog">
          <Catalog />
        </Route> 
        <Route path="/choose">
          <Choose />
        </Route> 
        */}
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
