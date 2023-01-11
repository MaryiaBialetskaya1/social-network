import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) =>{

    // 3. map array of objects dialogs to jsx component => then return dialogsElements
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name}  id={d.id}/>)
    // 3. map array of objects messages to jsx component => then return messagesElements
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)

    return(
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export  default Dialogs;