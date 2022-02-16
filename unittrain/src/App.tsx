
import React, { useState } from 'react'
import Form from './components/Form'
import List from './components/List'
import Banner from './components/Banner'
import "./App.css"
 
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
    <div className="container">
      <Banner />
      <Form people={people} setPeople={setPeople} />
      <List people={people} />
    </div>
  )
}

