import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) =>{

     //let state = props.store.getState();
    let state = props.store.getState().dialogsReducer;

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
            SendMessage={onSendMessageClick}
            updateNewMessageBody={onNewMessageChange}
            dialogsReducer={state}
        />
    )
}

export  default DialogsContainer;