import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: "Hi, how are you", likesCount: 12},
        {id: 2, message: "Come with me to cinema", likesCount: 11},
        {id: 3, message: "Hi, how are you", likesCount: 1},
        {id: 4, message: "Hi, how are you", likesCount: 2},
        {id: 5, message: "Hi, how are you", likesCount: 12},
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount ={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>New Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;
