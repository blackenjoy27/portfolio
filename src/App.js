import React from "react";
import {Switch, Route} from "react-router-dom";
import Homepage from './animateComponents/Homepage';
import Aboutpage from "./animateComponents/Aboutpage";

function App() {

  return (
    <div className="allContents">
      <Switch>
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route exact path="/about">
          <Aboutpage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
