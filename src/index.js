import './index.css';
import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updateNewPostText} from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));


let rerenderEntireTree = (state) =>{
    root.render(
        <React.StrictMode>
            <App posts={state.profilePage.posts}
                 dialogs={state.dialogsPage.dialogs}
                 newPostText={state.profilePage.newPostText}
                 messages={state.dialogsPage.messages}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
            />
            {/*<App state={state}/>*/}
        </React.StrictMode>
    );
}
reportWebVitals();


rerenderEntireTree(state);
subscribe(rerenderEntireTree);