import React,{Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Logos from "./logos/Logos";
import Navlinks from "./navlinks/Navlinks";
import ProfileRedux from "./Profile/Profile";
import NewProfileForm from './NewProfileForm/NewProfileForm';
import SearchResult from './Search/SearchResult';
import {Profile} from "./Profile/Profile";
import './App.css';


class  App extends Component {
  render() {
    return (
     <div className="App">
    <Logos />
    <Navlinks /> 


     <Switch>  
       

    <Route path ="/" exact render= {()=> <center><h1>Home page </h1></center> } />
    <Route path ="/profile/:id" render= {(props)=><ProfileRedux id = {props.match.params.id}/>} />
    <Route path ="/tab" render= {() => <center><h1>this page is under construction. </h1></center>} />
    <Route path ="/new-profile" component = {NewProfileForm} />
    <Route path ="/search/:query" render = {(props)=><SearchResult query ={props.match.params.query} /> } />
    <Route path ="/result/:id" render = {(props)=><Profile id ={0} dataArray = {[ JSON.parse (localStorage.getItem("users"))[props.match.params.id]]}/> } />
    <Route path ="/" render = {()=><center><h2>This page doesn't exist</h2></center>} />
        </Switch>

    
   


    </div>
    ) 
}
}
export default App;
