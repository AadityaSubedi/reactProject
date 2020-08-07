import React,{Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Logos from "./logos/Logos";
import Navlinks from "./navlinks/Navlinks";
import Profile from "./Profile/Profile";
import './App.css';
class  App extends Component {
  render() {
    return (
     <div className="App">
    <Logos />
    <Navlinks />  

     <Switch>  

    <Route path ="/home" render= {() =><center><h1>Home page </h1></center> } />
    <Route path ="/profile/:id" render= {(props)=><Profile id = {props.match.params.id}/>} />
    <Route path ="/tab" render= {() => <center><h1>this page is under construction. </h1></center>} />
    <Route path ="/new-profile" component = {Profile} />
    </Switch>
   


    </div>
    ) 
}
}
export default App;
