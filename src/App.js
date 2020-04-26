import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import SearchBanner from './Components/SearchBanner/SearchBanner';
import BreakFast from './Components/Breakfast/Breakfast';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>  
      <SearchBanner></SearchBanner>

      <Router>
        <Switch>
          <Route path="/breakfast">
            <BreakFast></BreakFast>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
