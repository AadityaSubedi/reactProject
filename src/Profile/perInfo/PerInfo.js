import React from "react";
import "./PerInfo.css";
import {connect} from "react-redux";


export const PerInfo  = (props)=>{
   
   var dataInfo =[];
var data = props.data;

// this function is targeted to transverse through each element in the nested Object(like our API response)
const iterate = (obj) => {
   Object.keys(obj).forEach(key => {
      

   if (typeof obj[key] === 'object') {
      // unique number generator : Date.now() and  Math.random()  
      // gives the higher degree of  uniquenes on multiplying both.

     void(isNaN(key)? (dataInfo.push(<p key={Date.now()*Math.random()} > <b>{ key +": "}</b> </p>)): null);

           iterate(obj[key])
       }
       else {
         dataInfo.push(<p key={Date.now()*Math.random()} > <b>{ key +": "}</b> <i> {""+obj[key]}</i>  </p>)
       }
   })
}

iterate(data);


   
return(<div className="dataInfo">{dataInfo}</div>)

}  



       

const mapStateToProps = (state , ownProps)=>
{
   return {
      data: state.apiResponse[ownProps.id],
   };
}

export default connect(mapStateToProps)(PerInfo);