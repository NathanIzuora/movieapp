import React, { Component } from 'react';
import './App.css';
import MovieList from './components/moviesList'
import MovieDetail from './components/movieDetail'
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {theSearch} from './actions/index'



class App extends Component {  

  constructor(props){
    super(props);
    this.state= {
      title:""
    }
  }

  diditwork(){
    console.log(this.state)
  }

  render(){
    return( 
  
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to= "/">
          <h1 className="App-title">Movies Are Fun</h1>
          </Link>
          <input className ="searchBar"
          placeholder="search a movie here"
          onChange={event=> this.setState({title: event.target.value})}/>
          <button 
          type="button"
          className="searchButton"
          onClick={()=> this.diditwork()}>Submit</button>
        </header>
      <Switch>
      <Route exact path= "/" component= {MovieList} />
      <Route path= "/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
    )}
    }
  
function mapDispatchToProps(dispatch) {
  return bindActionCreators({theSearch, dispatch})
}
  
export default connect(null, mapDispatchToProps)(App);


