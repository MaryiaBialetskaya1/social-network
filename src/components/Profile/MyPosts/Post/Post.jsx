import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.myPostBlock}>
            <div>
                <img
                    //src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
                    src='https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtc3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt='portrait'/>
            </div>
            <div className={s.postItemBlock}>
                <div>
                    {props.message}
                </div>
                <div className={s.likeSign}>
                    <span>&#x2661;</span> {props.likesCount}
                </div>
            </div>
        </div>
    )
}
export default Post;
