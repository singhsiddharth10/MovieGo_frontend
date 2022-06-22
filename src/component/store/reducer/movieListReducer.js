const initailState = {
    movieList : [],
    listFetched : false,
}

const movieListReducer = (state = initailState,action) => {
    switch(action.type){
        case "fetchMovieList" : 
            return {
                ...state,
                listFetched : action.payload.listFetched,
                movieList : action.payload.movieList
            };
        default:
            return state

    }
}

export default movieListReducer;