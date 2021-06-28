import React from "react";
import {Switch, Route, useLocation} from "react-router-dom";
import Homepage from './animateComponents/Homepage';
import Aboutpage from "./animateComponents/Aboutpage";
import {AnimatePresence} from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="allContents">
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route exact path="/about">
            <Aboutpage/>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
