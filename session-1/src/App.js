import React from 'react';
import './index.css';
import Category from './page/Category.js';
import HomePage from './page/Homepage.js';
import PDP from './page/PDP.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation/>
    </>
  );
}

function Navigation (){
  return (
    <>
      <Router>
        <div>
          {/* Element */}
          <ul className="navigation">
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/category/1">New Arrivals</Link> </li>
            <li> <Link to="/category/2">Best Sellers</Link> </li>
            <li className="cart"> <Link to="/cart">Cart</Link> </li>
          </ul>
          {/* Link */}
          <Switch>
            <Route exact path="/">
             <HomePage/>
            </Route>  
            <Route path="/category">
             <Category/>
            </Route>
            <Route path="/cart">
              <Category/>
            </Route>
            <Route path="/detail">
              <PDP/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App;
