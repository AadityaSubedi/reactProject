import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect } from 'react-redux';
import './Navlinks.css';


const Navlinks = (props) =>
{
    return (
        <div className ="nav">
        <nav>
            <ul>
           { props.nav.map((obj) =>  <li key={obj.text}><NavLink to={obj.to}>{obj.text}</NavLink></li>)}
         </ul>
        </nav> 
        </div>  
        )
    }



    const mapStateToProps = (state)=>
{
   return {
      nav: state.nav
   };
}
export default connect(mapStateToProps)(Navlinks) ;
