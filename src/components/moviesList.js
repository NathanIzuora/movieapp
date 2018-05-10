import React, { Component } from 'react';
import Movies from './movie'
import styled from 'styled-components'


class MovieList extends Component {
  state = {
    movies: []
  }


async componentDidMount(){
  try{
    const result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=8643abab9cc97b39302af32c0f375163&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
    const moviesApi = await result.json();
    this.setState({
      movies: moviesApi.results
    })
  } catch(e){
    console.log(e)
  }
}
  render() {
    return (
   <MovieGrid>
      {this.state.movies.map(movie => <Movies key ={movie.id} movie={movie}/>)}
    </MovieGrid> 
    );
  }
}

export default MovieList;

const MovieGrid= styled.div`
display: grid;
padding: 1rem;
grid-template-columns: repeat(4, 1fr);
grid-row-gap: 1rem;
`;

