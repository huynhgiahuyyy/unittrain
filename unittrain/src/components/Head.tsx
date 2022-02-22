import React from 'react'
import { Routes , Route, Link } from 'react-router-dom';
import Aboutme from './Aboutme';
import PrimarySearchAppBar from './PrimarySearchAppBar';


import "./Head.css"
 function Head() {
  return (
    <div className="header">
       <PrimarySearchAppBar />
      <h1>Pet Project React (input member)</h1>
      
      <hr></hr>
      
      
      <Link to="/Aboutme"><h2>About me</h2></Link>
      
      <hr>
    </hr>
      <Routes>
        
        <Route path="/Aboutme" element={<Aboutme/ >}></Route>
   
      </Routes>
      
      </div>
     
  );
}

 
  

export default Head


