import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = (props) =>{
    return(
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Leo </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Maria </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Stan </NavLink>
                </div>
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