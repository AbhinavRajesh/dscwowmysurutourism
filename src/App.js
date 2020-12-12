import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
