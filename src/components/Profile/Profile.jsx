import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () =>{
    return(
        <div className={s.content}>
            <div>
                <img src='https://images.unsplash.com/photo-1489535952530-0fd16a62e111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGplbGx5ZmlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' alt='main page'/>
            </div>
            <div>
                <img src='src/components/Profile/Profile' alt='avatar'/>
                <div>Description</div>
            </div>
            <MyPosts />
        </div>
    )
}
export default Profile;
