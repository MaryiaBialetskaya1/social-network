import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) =>{

    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.onSendMessageClick();
 }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.onNewMessageChange(body);
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