import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import RandomeGame from "./pages/RandomeGame";
import ResultSearch from "./pages/ResultSearch";
import SingUp from "./pages/SingUp";
import We from "./pages/We";
import Search from "./pages/Search";


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
          <Route path="/search/" component={Search} />
            <Route path="/we/" component={We} />
            <Route path="/singup/" component={SingUp} />
            <Route path="/login/" component={Login} />
            <Route path="/resultSearch/" component={ResultSearch} />
            <Route path="/randomeGame/" component={RandomeGame} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>

      </div>
    );
  }
}

