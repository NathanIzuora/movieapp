import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components'
const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';

const Movies = ({movie}) =>  ( 
        
        <Link to={`/${movie.id}`}>
        <Poster src= {`${POSTER_PATH}${movie.poster_path}`} alt= {movie.title}/>
        </Link>
    
)
    
    

Movies.propTypes ={
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        
    }).isRequired,
}

export const Poster = styled.img`
box-shadow: 0 0 35px black;

`
export default Movies;