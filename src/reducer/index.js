import {MOVIE_SEARCH} from '../constants/theConstant'


const searchedTheMovie = (action) =>{
    return{
        text: action.text,
        
    }
}

const searchedaMovie= (state=[], action)=>{
    let searchedaMovie= null;
    switch(action.type){
        case MOVIE_SEARCH:
            searchedaMovie = [...state, searchedTheMovie(action)]
            console.log("fun", searchedaMovie)
            return searchedaMovie;
            default:
            return state;
    }

}

export default searchedaMovie;