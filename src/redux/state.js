
let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs", likesCount: 12},
            {id: 2, message: "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt", likesCount: 11},
            {id: 3, message: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey", likesCount: 1},
            {id: 4, message: "Life is what happens when you're busy making other plans. -John Lennon", likesCount: 2},
            {id: 5, message: "Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead\n", likesCount: 12},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Leo"},
            {id: 2, name: "Maria"},
            {id: 3, name: "Stanislaus"},
        ],
        messages: [
            {id: 1, message: "Hi, how are you"},
            {id: 2, message: "Come with me to cinema"},
            {id: 3, message: "I am going to shopping, do you wanna go?"},
        ]
    },

}

export let addPost  = (postMessage) => {
    let newPost = {
        id: 1,
        message: postMessage,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost);
}

export default state;