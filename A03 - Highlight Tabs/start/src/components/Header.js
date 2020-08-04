import React from 'react'
import Tab from'../components/Tab.js'
import {
    BrowserRouter as Router,
 
    NavLink 
  } from "react-router-dom";
export default function Header() {
    return (
        <div>
              <div className="tabs">
         
         <Tab> <NavLink activeClassName='is-active' to="/" exact={true}>Home</NavLink ></Tab>
         <Tab> <NavLink activeClassName='is-active' to="/about">About</NavLink ></Tab>
         <Tab> <NavLink activeClassName='is-active' to="/features">Features</NavLink ></Tab>
         
       </div>
        </div>
    )
}
