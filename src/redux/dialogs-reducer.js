const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
    debugger;
    if(action.type === SEND_MESSAGE){
        let body = state.newMessageBody;
        state.newMessageBody = "";
        state.messages.push({id: 4, message: body})

    } else if(action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;
    }
    return state;
}
export default dialogsReducer;