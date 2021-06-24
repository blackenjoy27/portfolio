import './App.css';
import React, {useState} from "react";
import {Switch, Route} from "react-router-dom";
import Homepage from './animateComponents/Homepage';

function App() {

  return (
    <div className="allContents">
      <Switch>
        <Route path="/">
          <Homepage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
