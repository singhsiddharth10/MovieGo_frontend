const initailState = {
    messageList : [],
}

const chatmessageReducer = (state = initailState,action) => {
    switch(action.type){
        case "messagelist" : 
            return {
                ...state,
                messageList : action.payload.messageList
            };
        default:
            return state

    }
}

export default chatmessageReducer;