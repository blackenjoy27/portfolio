import React from "react";
import {Switch, Route, useLocation} from "react-router-dom";
import Homepage from './animateComponents/Homepage/Homepage';
import Aboutpage from "./animateComponents/About/Aboutpage";
import Projects from "./animateComponents/Projects/Projects";
import {AnimatePresence} from "framer-motion";

function App() {
  const location = useLocation();
  return (
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route exact path="/about">
            <Aboutpage/>
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
      </AnimatePresence>
  );
}

export default App;
