const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs", likesCount: 12},
        {id: 2, message: "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt", likesCount: 11},
        {id: 3, message: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey", likesCount: 1},
        {id: 4, message: "Life is what happens when you're busy making other plans. -John Lennon", likesCount: 2},
        {id: 5, message: "Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead\n", likesCount: 12},
    ],
        newPostText: 'React/Redux',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 1,
                message: state.newPostText,
                likesCount: 0
            }
            state.newPostText = "";
            state.posts.push(newPost);
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => (
    { type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;