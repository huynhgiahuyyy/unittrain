
import React, { useState } from 'react'
import { Routes , Route, Link } from 'react-router-dom';
import Form from './components/Form'
import List from './components/List'
import Banner from './components/Banner'
import "./App.css" 
import Form2 from './components/Form2';

export interface IState{
  people: {
      name: string,
      age: number,
      bio: string
  }[]
}
export default function App(){
  const [people, setPeople] = useState<IState["people"]>([{name:"Huy Huynh",age:18,bio:"developer"}]);
  return (
    <div>
    <div className="container">
     
      
      <Link to="/tut"><h2>How to use?</h2></Link>
      <Routes>
        <Route path="/tut" element={<Banner/ >}></Route>
      </Routes>
      <hr>
      </hr>
      <br>
      </br>
      </div>
      <div className="container2">
      <Form people={people} setPeople={setPeople} />
      <List people={people} />
      <div className="container2">
      <Form2 />
      </div>
      
      </div >
      
      
      </div>
    
  )
}

