import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Guide from "./Components/LocalGuide";
import Home from "./Components/Home";
import Blog from "./Components/Blog/Blog";
import Gallery from "./Components/Gallery/Gallery";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/guide" component={Guide} />
          <Route path="/blog" component={Blog} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
