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

const Dialogs = (props) =>{
    return(
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name="Leo"  id="1"/>
                <DialogItem name="Maria"  id="2"/>
                <DialogItem name="Stan"  id="3"/>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi, how are you</div>
                <div className={s.message}>Come with me to cinema</div>
                <div className={s.message}>I am going to shopping, do you wanna go?</div>
            </div>
        </div>
    )
}

export  default Dialogs;