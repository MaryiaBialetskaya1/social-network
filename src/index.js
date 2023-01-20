import './index.css';
// import state, {subscribe} from "./redux/state";
// import {addPost, updateNewPostText} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/state";



const root = ReactDOM.createRoot(document.getElementById('root'));


let rerenderEntireTree = (state) =>{

    root.render(
        <React.StrictMode>
            <App posts={state.profilePage.posts}
                 dialogs={state.dialogsPage.dialogs}
                 newPostText={state.profilePage.newPostText}
                 messages={state.dialogsPage.messages}
                 dispatch={store.dispatch.bind(store)}
            />
            {/*<App state={state}/>*/}
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);