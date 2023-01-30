import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import store from "./redux/store";
import store from "./redux/redux-store";



const root = ReactDOM.createRoot(document.getElementById('root'));
debugger;
let rerenderEntireTree = (state) =>{

    root.render(
        <React.StrictMode>
            <App
                posts={state.profileReducer.posts}
                dialogs={state.dialogsReducer.dialogs}
                newPostText={state.profileReducer.newPostText}
                messages={state.dialogsReducer.messages}
                dispatch={store.dispatch.bind(store)}
                store={store}
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