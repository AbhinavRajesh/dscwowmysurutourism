import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Guide from "./Components/LocalGuide";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/guide" component={Guide} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
