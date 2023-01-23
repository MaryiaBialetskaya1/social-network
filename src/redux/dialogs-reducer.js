const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Leo"},
        {id: 2, name: "Maria"},
        {id: 3, name: "Stanislaus"},
    ],
    messages: [
        {id: 1, message: "Hi, how are you"},
        {id: 2, message: "Come with me to cinema"},
        {id: 3, message: "I am going to shopping, do you wanna go?"},
    ],
    newMessageBody: "",
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 4, message: body})
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => (
    { type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;