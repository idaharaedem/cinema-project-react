import React from 'react';
import {Route, Switch, Router} from 'react-router-dom';

import MovieDetailsPage from '../src/pages/MovieDetailsPage/movieDetailsPage'
import MovieDetails from './components/movieDetails/movieDetails'
import HomePage from '../src/pages/Homepage/homepage'

import './App.css';

class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/moviedetails/:id" component={MovieDetailsPage}/>
       </Switch>
      </div>
    );
  }
}
export default App;
