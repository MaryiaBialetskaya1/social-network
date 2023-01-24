import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
debugger;
    return (
        <div>
            <ProfileInfo />
            {/*<MyPosts posts={props.posts}*/}
            {/*         newPostText={props.newPostText}*/}
            {/*         dispatch={props.dispatch}*/}
            {/*/>*/}
            <MyPostsContainer
                store={props.store}
            />
        </div>
    )
}
export default Profile;
