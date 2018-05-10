import React, { Component } from 'react';
import {Poster} from './movie'
import styled from 'styled-components'


const POSTER_PATH = 'https://image.tmdb.org/t/p/w500';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280'

class MovieDetail extends Component {
  state = {
    movie: {},
  }


async componentDidMount(){
  try{
    const result = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=8643abab9cc97b39302af32c0f375163&language=en-US`);
    const movie = await result.json();
    this.setState({
     movie,
    });
  } catch(e){
    console.log(e)
  }
}
  render() {
      const {movie} = this.state;
    return (
   <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
    <movieInfo>
    <Poster src= {`${POSTER_PATH}${movie.poster_path}`} alt= {movie.title}/>
      <h1>{movie.title} </h1>
      <h2>{movie.release_date} </h2>
      <h3>{movie.overview}</h3>
      </movieInfo>
    </MovieWrapper> 
    );
  }
}

export default MovieDetail;

const MovieWrapper = styled.div`
position: relative;
padding-top: 50vh;
background: url(${props => props.backdrop} ) no-repeat;
background-size: cover;
`;

const movieInfo = styled.div`
background: white;
text-align: left;
padding: 2rem 18%;
display: flex;
> div {
    margin-left: 20px;

}
img{
    position: relative;
    top: -5rem;
}
`
