import {useEffect} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import alanBtn from "@alan-ai/alan-sdk-web";

import Guide from "./Components/LocalGuide";
import Home from "./Components/Home";
import Blog from "./Components/Blog/Blog";
import Gallery from "./Components/Gallery/Gallery";
import PageLayout from "./Components/PageLayout/PageLayout";

const alanKey = "de6f249ceb5e1c3d63d0fb1034ae70222e956eca572e1d8b807a3e2338fdd0dc/stage";


function App() {
  useEffect(() => {
    alanBtn({
      key: alanKey
    })
  }, []);
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
