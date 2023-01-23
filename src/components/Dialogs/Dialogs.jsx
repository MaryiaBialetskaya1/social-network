import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) =>{
    debugger;
    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        let action = sendMessageCreator();
        props.dispatch(action);
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        let action = updateNewMessageBodyCreator(body);
        props.dispatch(action);
    }

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name}  id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)

    return(
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={ newMessageBody }
                            onChange={ onNewMessageChange }
                            placeholder='Enter your message'>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={ onSendMessageClick }>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export  default Dialogs;