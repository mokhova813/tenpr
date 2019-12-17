<<<<<<< HEAD
import React from "react";
=======
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Login from "./components/login";
import SearchIngr from "./components/searchIngr";
import RandomeGame from "./components/randomeGame";
>>>>>>> bc05717868a790397e19434378271846e0598707
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import RandomeGame from "./pages/RandomeGame";
import ResultSearch from "./pages/ResultSearch";




export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
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

// export default App;
