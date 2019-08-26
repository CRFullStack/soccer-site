import React from "react";
import App from "../main/App";
import Contact from "../contact/contact";
import Signup from "../sign_up/signUp";
import { Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <Switch>
      {/* both /roster and /roster/:number begin with /roster */}
      {/**future routes 
        <Route exact path="/roster" component={FullRoster} />
        <Route path="/roster/:number" component={Player} />
        */}
      <Route exact path="/" component={App} />
      <Route path="/contact" component={Contact} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
}

export default Routes;
