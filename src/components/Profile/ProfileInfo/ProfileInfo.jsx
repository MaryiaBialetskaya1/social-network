import React from "react";
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.wallpaperImages}
                    src='https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                     //src='https://images.unsplash.com/photo-1592418239323-a823afd6138d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGhhbXN0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
                    alt='main page'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src='src/components/Profile/Profile' alt='avatar'/>
                <div>Description</div>
            </div>
        </div>
    )
}
export default ProfileInfo;
