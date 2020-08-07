import React from "react";
import "./PerInfo.css";
import {connect} from "react-redux";


const PerInfo  = (props)=>{
   var dataInfo =[];
var data = props.data;

for(var  key in data){
   dataInfo.push(<p key={key}>{key+" : " + data[key]}</p>)
}
   
return(<div className="dataInfo">{dataInfo}</div>)

}  



       

const mapStateToProps = (state , ownProps)=>
{
   return {
      data: state.apiResponse[ownProps.id],
   };
}

export default connect(mapStateToProps)(PerInfo);