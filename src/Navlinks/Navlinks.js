import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Navlinks/Navlinks.css";


const Navlinks = (props) =>
{
    return (
        <div className ="Nav">
        <nav>
            <ul>
           { props.content.map((obj) =>  <li><NavLink to={obj.to}>{obj.text}</NavLink></li>)}
         </ul>
        </nav> 
        </div>  
        )
    }
export default Navlinks ;
