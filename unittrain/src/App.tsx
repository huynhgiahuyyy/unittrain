
import React, { useState } from 'react'
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import "./App.css"
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';
import Form from './components/Form'
import List from './components/List'
import Banner from './components/Banner'
import Form2 from './components/Form2';
import Head from './components/Head';
// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     resources: {
//       en: { translation: translationsEn },
//       fr: { translation: translationsFr },
//     },
//     lng: "en",
//     fallbackLng: "en",
//     interpolation: { escapeValue: false },
//   });

export interface IState{
  people: {
      name: string,
      age: number,
      bio: string
  }[]
}
export default function App(){
  const [people, setPeople] = useState<IState["people"]>([{name:"Huy Huỳnh",age:23,bio:"Lập Trình Viên"}]);
  return (
    <div>
      <Head />
      
      <Link to="/tut"><h2>How to use?</h2></Link>
      
     <Routes>
      <Route path="/tut" element={ <Banner /> }></Route>
     </Routes>
    <div className="container">
      
      <hr>
      </hr>
      <br>
      </br>
      </div>
      <div className="container2">

      
      <Form people={people} setPeople={setPeople} />
      <List people={people} />
      
      
      <div className="container2">
      </div>   
      </div >
      
      <Link to="/Form2"><h2>Resginter</h2></Link>
      
      {/* <a href="/Form2">Inbox</a> */}
      <Routes>
        <Route path="/Form2" element={ <Form2 />} ></Route>
      </Routes>
      <Link to="/"><h2>Go Home Page</h2></Link>
      </div>
     
    
  )
}

