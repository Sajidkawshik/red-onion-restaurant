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
import Lunch from './Components/Item/Lunch/Lunch';
import Dinner from './Components/Dinner/Dinner';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import ReviewOrderBtn from './Components/ReviewOrderBtn/ReviewOrderBtn';
import Review from './Components/Review/Review';

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

          <Route path="/lunch">
            <Lunch></Lunch>
           

          </Route>

          <Route path="/dinner">
            <Dinner></Dinner>
          </Route>

          <Route path="/review">
              <Review></Review>
          </Route>

          <Route path="/:id">
              <ItemDetails></ItemDetails>
          </Route>

         

        </Switch>
      </Router>

    </div>
  );
}

export default App;
