import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
debugger;
    let newPostText = props.newPostText;
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount ={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3 className={s.headerText}>My posts</h3>
            <div className={s.textareaBlock}>
                <div>
                    <textarea className={s.textarea}
                              onChange={ onPostChange }
                              ref={newPostElement}
                              value={newPostText}>

                    </textarea>
                </div>
                <div className={s.buttonBlock}>
                    <button className={s.buttonPublish}
                            onClick={  onAddPost }>Publish</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;
