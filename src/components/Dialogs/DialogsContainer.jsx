import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) =>{

    let state = props.store.getState();

    let onSendMessageClick = () => {
        let action = sendMessageCreator();
        props.store.dispatch(action);
    }
    let onNewMessageChange = (body) => {
        let action = updateNewMessageBodyCreator(body);
        props.store.dispatch(action);
    }

    return(
        <Dialogs
            onSendMessageClick={onSendMessageClick}
            onNewMessageChange={onNewMessageChange}
            dialogs={state.dialogsReducer.dialogs}
            messages={state.dialogsReducer.messages}
            newMessageBody={state.dialogsReducer.newMessageBody}
        />
    )
}

export  default DialogsContainer;