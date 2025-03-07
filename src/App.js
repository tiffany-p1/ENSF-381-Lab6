import React from 'react';
import './App.css';
import Contact from "./Contact"
import About from "./About"
import Home from "./Home"

function App() {
  const titles = ["Home Page", "About Page", "Contact Page"]
  const description = ["Welcome to our website", "We are passionate about delivering quality experiences", "Feel free to reach out to us via email or phone"]
  return( 
  /*
  <div>
    
    <Contact /> 
    <br></br>
    <About />
    <br></br>
    <Home />
    <br></br>
  <div>
  */
 <div>
    <Contact title={titles[2]} message={description[2]} />
    <About title={titles[1]} message={description[1]} />
    <Home title={titles[0]} message={description[0]} />
  </div>
  );
}


export default App; 
