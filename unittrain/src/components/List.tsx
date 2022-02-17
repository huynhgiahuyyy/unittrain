import React from 'react'
import "../css/List.css"
import {IState as IProps} from "../App";

export default function List({people}: IProps){
  const renderList = () : JSX.Element[] => {

   return people.map(person => {
      return(
        <div className="list-item-container">
                {person.name} - {person.age} - {person.bio}
            </div>
      )
    }
   )}
    return (
        <div className="list-container">
            <h2>List</h2>
            {renderList()}
        </div>
    )
}

