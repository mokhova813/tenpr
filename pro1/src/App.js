import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Login from "./components/login";
import SearchIngr from "./components/searchIngr";
import RandomeGame from "./components/randomeGame";
import './App.css';


class App extends React.Component {
  render() {
  return (
    <div>
    <div className = "col-xs-5">
      <Login />
      </div>
     <div className = "col-xs-7">
      <SearchIngr />
    </div>
    <div>
      <RandomeGame/>
      </div>
    </div>
  );
  }
}

export default App;
