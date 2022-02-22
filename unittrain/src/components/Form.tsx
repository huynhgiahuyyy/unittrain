import React, { useState } from 'react'
import "../css/Form.css"
import {IState as Props} from "../App";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
interface IProps{
  people: Props['people'],
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>

}
export default function Form({people, setPeople}:IProps){

    const [inputData, setInputData] = useState({name:"", age:"", bio:""});

    const onChange = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) =>{
      setInputData({...inputData,[e.target.name] : e.target.value});}
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) :void => {
      e.preventDefault();
      setPeople([...people,{name: inputData.name, age: Number(inputData.age), bio: inputData.bio}])
      setInputData({name:"", age:"", bio:""});
    
    }
    return (
        <div className="form-container">
            
            <h2>Form</h2>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" id="name" placeholder="name" onChange={onChange} value={inputData.name}/>
                <input type="number" name="age" id="age" placeholder="age" onChange={onChange}value={inputData.age}/>
                <textarea name="bio" id="bio" placeholder="Bio Description" onChange={onChange}value={inputData.bio}></textarea>
                <Stack spacing={2} direction="row">
                <Button type="submit" variant="contained">Submit</Button>
                </Stack>
                <br>
                </br>
                
            </form>
        </div>
    )
}

