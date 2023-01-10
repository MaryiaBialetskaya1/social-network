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
    let dialogsData = [
        {id: 1, name: "Leo"},
        {id: 2, name: "Maria"},
        {id: 3, name: "Stanislaus"},
    ]

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name}  id={dialog.id}/>)

    let messagesData = [
        {id: 1, message: "Hi, how are you"},
        {id: 2, message: "Come with me to cinema"},
        {id: 3, message: "I am going to shopping, do you wanna go?"},
    ]
    return(
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <Message message='Hi, how are you' />
                <Message message='Come with me to cinema' />
                <Message message='I am going to shopping, do you wanna go?' />
            </div>
        </div>
    )
}

export  default Dialogs;