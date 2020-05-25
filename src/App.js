import React from 'react';
import {Route, Switch,} from 'react-router-dom';


import MovieDetailsPage from '../src/pages/MovieDetailsPage/movieDetailsPage'
import HomePage from '../src/pages/Homepage/homepage'
import SearchPage from './pages/Searchpage/searchpage'


import './App.css';

class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/moviedetails/:id" component={MovieDetailsPage}/>
          <Route exact path="/search/:name" component={SearchPage} />
       </Switch>
      </div>
    );
  }
}
export default App;
