import React from 'react';
import Header from'./components/Header'
import Routes from'./components/Routes'
import './App.css';
import {
  BrowserRouter as Router,

} from "react-router-dom";

function App() {
  

    

  return (
    <Router >
    <div className="app">
      <div className="browser">

      <Header />

        <div className="viewport">
          <Routes />
        </div>
     
          </div>
    </div>
   
         
   
    </Router>
  );
}

export default App;