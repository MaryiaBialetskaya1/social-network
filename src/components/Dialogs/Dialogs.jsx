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
    return(
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name="Leo"  id="1"/>
                <DialogItem name="Maria"  id="2"/>
                <DialogItem name="Stan"  id="3"/>
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