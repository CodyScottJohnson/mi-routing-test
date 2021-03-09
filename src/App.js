
import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Home from "./home";
import Stuff from "./stuff";
import Contact from "./contact";

class App extends Component {
  render() {
    return (
        <div>
        <BrowserRouter basename={'/p/routing-test'}>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
             
          </div>
        </div>
        <div className="content">
      <Route exact path="/" component={Home}/>
      <Route path="/stuff" component={Stuff}/>
      <Route path="/contact" component={Contact}/>
    </div>
      </BrowserRouter>
     
    </div>
    );
  }
}
 
export default App;