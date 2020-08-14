import React from 'react';
import './SearchResult.css';
import { NavLink } from 'react-router-dom';
import Search from './Search';


const cardGenerator = (query) => {
    //retrieve the data from local storage;
var storedDataArray = JSON.parse (localStorage.getItem("users"));

//generates the array of only those users that has matching "query"

var matchingUsers = storedDataArray.filter((key)=>{
    return (key.first_name+key.last_name).toLowerCase().includes(query)
    
})


if (matchingUsers.length )
{
//for each matching users return a card 
        return matchingUsers.map((key)=>{
            var index = storedDataArray.indexOf(key);
            return (
                <NavLink  key = {Math.random() } to ={"/result/"+index} >
                <div  className ="Person">
            
                    <h3> {key.first_name}  {key.last_name}</h3>
                    <h5>Roll No.: {key.roll_number} Registration No.:{key.registration_number}  </h5>
                    </div>
                    
                </NavLink>
                )

            }

        )

    }
    else
       {
           return (
               <>
            <h2>OOPS!</h2> <h3>Trying using next keyword that best matches the users</h3>
           </>
           ); 
       }    

}



const SearchResult =(props) => {
    return (
        <>
        <Search/>

        <div className = "SearchResult">
            <big> Showing results for <b> "{props.query}"  ... </b></big>
            

            {/*render the cards of the profile matching the query */}
            
            {cardGenerator(props.query.toLowerCase())}
            

          
        </div>
        </>

    );

}

export default SearchResult ;