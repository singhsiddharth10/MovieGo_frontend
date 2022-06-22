export const fetchMovieList = (payload) => {
    return {
        type : "fetchMovieList",
        payload : {listFetched : true, movieList : payload}
    }
}