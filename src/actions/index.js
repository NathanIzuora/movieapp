import { MOVIE_SEARCH } from "../constants/theConstant";

export const theSearch= (title)=>{
    const action = {
        type: MOVIE_SEARCH,
        title:title
    }
    console.log("actionz", action)
    return action;

}