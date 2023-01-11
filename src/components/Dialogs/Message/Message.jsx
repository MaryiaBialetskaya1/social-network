import React from "react";
import s from './../Dialogs.module.css';

//2. creating component Message => return jsx
const Message = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}
export  default Message;