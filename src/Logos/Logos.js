import React from 'react';
import "./Logos.css";
const Logos = (props) => 
{
    return (
        <center className="Logos" >
        <img src = {props.logos[0]} style = {{height:"10%", width: "10%"}} alt="logo.png"  />
        <img src = {props.logos[1]} style ={{height:"40%", width: "40%"}}alt="ioelogo.jpg"/>
        </center>
    )
}
export default Logos;