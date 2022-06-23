export const fetchMessageList = (payload) => {
    return {
        type : "messagelist",
        payload : {messageList : payload}
    }
}