const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
debugger;
    if(action.type === ADD_POST){
        let newPost = {
            id: 1,
            message: state.newPostText,
            likesCount: 0
        }
        state.newPostText = "";
        state.posts.push(newPost);
    } else if(action.type === UPDATE_NEW_POST_TEXT){
        state.newPostText = action.newText;
    }
    return state;
}
export default profileReducer;