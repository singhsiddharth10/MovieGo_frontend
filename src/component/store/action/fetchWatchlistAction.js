export const fetchWatchlist = (payload) => {
    return {
        type : "fetchWatchlist",
        payload : {watchlist : payload}
    }
}