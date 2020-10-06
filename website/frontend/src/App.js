import React, { Component } from "react";
import "./App.css";
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import LandingPage from './pages/landingpage'
import Particle from './pages/errors'
import SearchPage from "./pages/searchpage";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/DeadTrapv2/" component={LandingPage} />
          <Route exact path="/errors" component={Particle} />
          <Route exact path="/phonesearch" component={SearchPage} />
          <Redirect to="/errors" />
        </Switch>
      </Router>
    );
  }
}

export default App;
