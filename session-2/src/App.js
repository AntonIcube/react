import React from 'react';
import './index.css';
import loginIcon from './component/img/login.png';
import cartIcon from './component/img/cart.png';
import userIcon from './component/img/user-male.png';
import Category from './page/Category';
import HomePage from './page/Homepage';
import Cart from './page/Cart';
import PDP from './page/PDP.js';
import User from "./page/user";
import Profile from "./page/user/components/Profile";
import Store from './redux/store'
import {Provider} from "react-redux"; 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Provider store={Store}>
      <Navigation/>
    </Provider>
  );
}

function Navigation (){
  return (
    <>
    {/* Set router  */}
      <Router>
        <div>
          {/* Element */}
          <ul className="navigation">
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/category/1">New Arrivals</Link> </li>
            <li> <Link to="/category/2">Best Sellers</Link> </li>
            <li className="cart"> <Link to="/cart">Cart</Link> </li>
            <li><Link to="/profile">Profile </Link> </li>
            <li><Link to="/login"> Login </Link> </li>
            <li><Link to="/cart"> Cart </Link> </li>
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
              <Cart/>
            </Route>
            <Route path="/detail">
              <PDP/>
            </Route>
            <Route path="/profile">
              <Profile/>
            </Route>
            <Route path="/login">
              <User/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App;
