import React from 'react';
import './Logos.css';
import {connect} from 'react-redux';


// returns the JSX to display the "logos" whose reference to actual file is stored in the redux
const Logos = (props) => 
{
    return (
        <div className="Logos" >
        <img src = {props.logo[0]} style = {{height:"10%", width: "10%"}} alt="logo.png"  />
        <img src = {props.logo[1]} style ={{height:"40%", width: "40%"}}alt="ioelogo.jpg"/>
        </div>
    )
}
 



const mapStateToProps = (state)=>
{
   return {
      logo: state.logo
   };
}


export default connect(mapStateToProps)(Logos);