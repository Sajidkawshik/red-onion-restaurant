import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import SearchBanner from './Components/SearchBanner/SearchBanner';
import ShowingMenu from './Components/ShowingMenu/ShowingMenu';
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
import Login from './Components/Login/Login';
import { AuthContextProvider, PrivateRoute } from './Components/Login/useAuth';
import Delivery from './Components/Delivery/Delivery';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Header></Header>
        <SearchBanner></SearchBanner>

        <Router>
          <Switch>
            <Route path="/menu">
              <ShowingMenu></ShowingMenu>

            </Route>

            <Route exact path="/">
              <ShowingMenu></ShowingMenu>
            </Route>

            <Route path="/review">
              <Review></Review>
            </Route>

            <Route path="/item/:id">
              <ItemDetails></ItemDetails>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/delivery">
              <Delivery></Delivery>
            </PrivateRoute>

          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
