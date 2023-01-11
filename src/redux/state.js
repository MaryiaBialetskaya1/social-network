//2. creat array of objects to dialogs
// let dialogs = [
//     {id: 1, name: "Leo"},
//     {id: 2, name: "Maria"},
//     {id: 3, name: "Stanislaus"},
// ]

//2. creat array of objects to messages
// let messages = [
//     {id: 1, message: "Hi, how are you"},
//     {id: 2, message: "Come with me to cinema"},
//     {id: 3, message: "I am going to shopping, do you wanna go?"},
// ]


//2. creat array of objects to posts
// let posts = [
//     {id: 1, message: "Hi, how are you", likesCount: 12},
//     {id: 2, message: "Come with me to cinema", likesCount: 11},
//     {id: 3, message: "Hi, how are you", likesCount: 1},
//     {id: 4, message: "Hi, how are you", likesCount: 2},
//     {id: 5, message: "Hi, how are you", likesCount: 12},
// ]

let state = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 12},
        {id: 2, message: "Come with me to cinema", likesCount: 11},
        {id: 3, message: "Hi, how are you", likesCount: 1},
        {id: 4, message: "Hi, how are you", likesCount: 2},
        {id: 5, message: "Hi, how are you", likesCount: 12},
    ],
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
}

export default state;