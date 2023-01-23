import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import store from "./redux/store";
import store from "./redux/redux-store";



const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) =>{
debugger;
    root.render(
        <React.StrictMode>
            <App
                posts={state.profilePage.posts}
                 dialogs={state.dialogsPage.dialogs}
                 newPostText={state.profilePage.newPostText}
                 messages={state.dialogsPage.messages}
                 dispatch={store.dispatch.bind(store)}
                 store={store}
                // state={state}
                // dispatch={store.dispatch.bind(store)}
                // store={store}
            />
            {/*<App state={state}/>*/}
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());
store.subscribe( () => {
    let state = store.getState()
    rerenderEntireTree(state);
});