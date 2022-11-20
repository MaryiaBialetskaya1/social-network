import React from "react";
import s from './Dialogs.module.css';


const Dialogs = (props) =>{
    return(
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>Leo</div>
                <div className={s.dialog}>Maria</div>
                <div className={s.dialog}>Stan</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi, how are you</div>
                <div className={s.message}>Come with me to cinema</div>
                <div className={s.message}>I am going to shopping do you wanna go?</div>
            </div>
        </div>
    )
}

export  default Dialogs;