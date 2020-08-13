import React, { Component } from 'react'
import {Redirect} from "react-router-dom"
import {FaSearch } from 'react-icons/fa';
import './Search.css';

class Search extends Component {
 state = {
   query: '',
 }

 clickHandler = ()=>{ 
     var value =  document.getElementById('InputSearch').value;
     if (value){ 
        this.setState({
            query: value 
   
        })
    }
}



 render() {
   return (
        <div className = "Search">

        {this.state.query ?<Redirect to ={"/search/"+this.state.query}/>: null}
       

       <input
       id = "InputSearch"
       type="text"
         placeholder="Search for..."
         />
       <button onClick = {this.clickHandler}> <FaSearch /> </button>



       </div>
       
     
   )
 }
}

export default Search