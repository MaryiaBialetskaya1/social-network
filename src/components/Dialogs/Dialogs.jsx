import React from "react";
import s from './Dialogs.module.css';


const Dialogs = (props) =>{
    return(
        <div className='dialogs'>
            <div className='dialogs-item'>
                <div className='dialog'>Leo</div>
                <div className='dialog'>Maria</div>
                <div className='dialog'>Stan</div>
            </div>
            <div className='messages'>
                <div className='message'>Hi, how are you</div>
                <div className='message'>Come with me to cinema</div>
                <div className='message'>I am going to shopping do you wanna go?</div>
            </div>
        </div>
    )
}

export  default Dialogs;