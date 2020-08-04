import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Logos from "./Logos/Logos";
import {store} from "./Store/store";
import Navlinks from "./Navlinks/Navlinks"
import './App.css';

class  App extends Component {
  render() {
    return (
      <React.Fragment>
    <Logos logos= {store.logos}/>
    <Navlinks content={store.nav}/>  
     <Switch>  
    <Route path ="/home" render= {() => <h1>home page </h1>} />
    <Route path ="/profile" component = {Profile} />
    <Route path ="/tab" render= {() => <h1>this page is under construction. </h1>} />
    </Switch>

</React.Fragment>
    ) 
}
}
export default App;
