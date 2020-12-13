import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Guide from "./Components/LocalGuide";
import Home from "./Components/Home";
import Blog from "./Components/Blog/Blog";
import Gallery from "./Components/Gallery/Gallery";
import PageLayout from "./Components/PageLayout/PageLayout";

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/guide" component={Guide} />
          <Route path="/blog" component={Blog} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/:id" component={PageLayout} />
        </Switch>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
