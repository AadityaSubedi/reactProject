import React  from 'react';
import {connect} from 'react-redux';
import "./Profile.css";
import { NavLink } from 'react-router-dom';
import PerInfoRedux from "./perInfo/PerInfo";
import {PerInfo} from "./perInfo/PerInfo";
import Search from '../Search/Search';

// the same Profile component is used for rendering the data from both 
// 1.API response(Profile is connected to redux store(default export)) and
// 2.LocalStorage(Profile is exported as "named export")
export const Profile = (props)=>{
 
    let id = +props.id;
    const dataArray = props.dataArray;
    let data= dataArray[id];

    // Disable the naviagtion to the next or previous profile if we reached the end.
    let prevResult = <NavLink to ={"/profile/" + (id-1) }>Prev Result</NavLink>;
    let nextResult = <NavLink to ={"/profile/" + (id+1) }>Next Result</NavLink>;
    prevResult =  !id ?<span className="inactive"> Prev Result </span> : prevResult;
    nextResult = id === dataArray.length -1 ? <span className="inactive">Next Result</span> : nextResult;



    return (
        
       
        <div className = "Profile">
                <Search/>
              


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
           
            
            {props.fromReduxStore? <PerInfoRedux id = {id} />:<PerInfo i = {id} data= {data}/> }
            
                      
            </div>


            <div className = "split right">
                {/* render the image  */}
         <img className="image" src = {data["avatar"]} alt={data["first_name"]}/>
         
            </div>
           
            <NavLink to="/new-profile"> <button  >Add New Profile</button></NavLink>
            </div>
           
        } 
        </div>
        

         
        
    );

  
}


//extract the data from the redux store
const mapStateToProps = (state, ownProps)=>
{
   return {
      dataArray: state.apiResponse,
      ...ownProps,
      fromReduxStore : true,
   };
}

export default connect(mapStateToProps)(Profile);