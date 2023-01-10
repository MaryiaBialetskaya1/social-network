import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return(
      <div className={s.dialog + ' ' + s.active}>
          <NavLink to={path}>{props.name}</NavLink>
      </div>
  )
}

const Message = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) =>{

    let dialogs = [
        {id: 1, name: "Leo"},
        {id: 2, name: "Maria"},
        {id: 3, name: "Stanislaus"},
    ]

    let messages = [
        {id: 1, message: "Hi, how are you"},
        {id: 2, message: "Come with me to cinema"},
        {id: 3, message: "I am going to shopping, do you wanna go?"},
    ]


    let dialogsElements = dialogs.map(d => <DialogItem name={d.name}  id={d.id}/>)



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