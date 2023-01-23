import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let newPostText = props.newPostText;

    let newPostElement = React.createRef();

    let addPostButton = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount ={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3 className={s.headerText}>My posts</h3>
            <div className={s.textareaBlock}>
                <div>
                    <textarea className={s.textarea}
                              onChange={onPostChange}
                              ref={newPostElement}
                              value={newPostText}>

                    </textarea>
                </div>
                <div className={s.buttonBlock}>
                    <button className={s.buttonPublish}
                            onClick={  addPostButton }>Publish</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;
