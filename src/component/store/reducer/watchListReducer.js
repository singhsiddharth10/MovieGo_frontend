const initailState = {
    watchlist : [],
}

const watchListReducer = (state = initailState,action) => {
    switch(action.type){
        case "fetchWatchlist" : 
            return {
                ...state,
                watchlist : action.payload.watchlist
            };
        default:
            return state

    }
}

export default watchListReducer;