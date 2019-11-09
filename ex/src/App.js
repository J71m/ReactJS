import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Catfacts from './components/Catfacts';
import Error from './components/Error';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/cat-facts" component={Catfacts}/>
            <Route component={Error}/>
           </Switch>
      </BrowserRouter>
    );
  }
}
 
export default App;