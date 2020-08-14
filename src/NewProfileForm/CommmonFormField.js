import React from 'react';
import {MyTextInput} from './StyledField';


//returns the form fields 
// this code will be then used since parents and guardians field have similar structure
const CommonFormField = (props)=>{
    return (
      <>
      <MyTextInput
              label= "Name"
              name={props.value+ "name"}
              id = {props.value+ "name"}
              type="text"
              placeholder="John Smith"
            />
            <MyTextInput
              label="Avatar(Input Url)"
              name={props.value+ "avatar"}
              id = {props.value+ "avatar"}
              type="text"
              placeholder="https://picsum.photos/200/300"
            />
             <MyTextInput
              label="Address"
              name={props.value+ "address"}
              id = {props.value+ "address"}
              type="text"
              placeholder="Lalitpur"
            />
  
            <MyTextInput
              label="Phone"
              name={props.value+ "phone"}
              id = {props.value+ "phone"}
              type="number"
              placeholder="+97798XXXXXXXX"
            />
            </>
    );
  }
  export default CommonFormField;