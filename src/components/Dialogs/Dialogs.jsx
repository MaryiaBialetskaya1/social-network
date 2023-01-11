import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {dialogs, messages} from "../../index";

const Dialogs = (props) =>{

    // //2. creat array of objects to dialogs
    // let dialogs = [
    //     {id: 1, name: "Leo"},
    //     {id: 2, name: "Maria"},
    //     {id: 3, name: "Stanislaus"},
    // ]
    //
    // //2. creat array of objects to messages
    // let messages = [
    //     {id: 1, message: "Hi, how are you"},
    //     {id: 2, message: "Come with me to cinema"},
    //     {id: 3, message: "I am going to shopping, do you wanna go?"},
    // ]

    // 3. map array of objects dialogs to jsx component => then return dialogsElements
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name}  id={d.id}/>)
    // 3. map array of objects messages to jsx component => then return messagesElements
    let messagesElements = messages.map(m => <Message message={m.message}/>)

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