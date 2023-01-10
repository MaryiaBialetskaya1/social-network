import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <textarea></textarea>
                <button>New Post</button>
            </div>
            <div className={s.posts}>
                <Post message='How are you, guys?' likesCount = '0'/>
                <Post message='This is my first post' likesCount = '23'/>
            </div>
        </div>
    )
}
export default MyPosts;
