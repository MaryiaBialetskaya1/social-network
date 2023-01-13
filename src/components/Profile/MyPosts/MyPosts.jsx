import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let newPostElement = React.createRef();
    let addPostButton = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    }
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount ={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3 className={s.headerText}>My posts</h3>
            <div className={s.textareaBlock}>
                <div>
                    <textarea className={s.textarea} ref={newPostElement} ></textarea>
                </div>
                <div className={s.buttonBlock}>
                    <button className={s.buttonPublish} onClick={  addPostButton }>Publish</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;
