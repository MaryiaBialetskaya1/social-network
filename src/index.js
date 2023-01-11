import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//2. creat array of objects to dialogs
let dialogs = [
    {id: 1, name: "Leo"},
    {id: 2, name: "Maria"},
    {id: 3, name: "Stanislaus"},
]

//2. creat array of objects to messages
let messages = [
    {id: 1, message: "Hi, how are you"},
    {id: 2, message: "Come with me to cinema"},
    {id: 3, message: "I am going to shopping, do you wanna go?"},
]

let posts = [
    {id: 1, message: "Hi, how are you", likesCount: 12},
    {id: 2, message: "Come with me to cinema", likesCount: 11},
    {id: 3, message: "Hi, how are you", likesCount: 1},
    {id: 4, message: "Hi, how are you", likesCount: 2},
    {id: 5, message: "Hi, how are you", likesCount: 12},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
