import React  from 'react';
import {connect} from 'react-redux';
import "./Profile.css";
import { NavLink } from 'react-router-dom';
import PerInfo from "./perInfo/PerInfo";


const Profile = (props)=>{
 
    let id = +props.id;
    const dataArray = props.dataArray;
    let data= dataArray[id];


    let prevResult = <NavLink to ={"/profile/" + (id-1) }>Prev Result</NavLink>;
    let nextResult = <NavLink to ={"/profile/" + (id+1) }>Next Result</NavLink>;
    prevResult =  !id ?<span className="inactive"> Prev Result </span> : prevResult;
    nextResult = id === dataArray.length -1 ? <span className="inactive">Next Result</span> : nextResult;

    

    return (
        
       
        <div className = "profile">

        { (!data) ? <h2>Loading...</h2> :
        <div> 
            <div className = "header" >
                {/* render the header of the profile component */}
                <span className ="title"> {data["first_name"]+" " + data["last_name"]}</span>
                <nav>
                    <ul>
                    
                        <li> {prevResult} </li>
                        <li> {nextResult}</li>
                    </ul>
                </nav>          
            </div>

           
            <div className="split left">
            {/* render the personal informations */}
            
            <PerInfo id = {id}/>
            
                      
            </div>


            <div className = "split right">
                {/* render the image  */}
         <img className="image" src = {data["avatar"]} alt={data["first_name"]}/>
         
            </div>
           
            <button  onClick ={()=>{}}>Add New Profile</button>
            </div>
           
        } 
        </div>
        

         
        
    );

  
}



const mapStateToProps = (state, ownProps)=>
{
   return {
      dataArray: state.apiResponse,
      ...ownProps,
   };
}

export default connect(mapStateToProps)(Profile);