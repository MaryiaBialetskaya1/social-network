import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import store from "./redux/store";
import store from "./redux/redux-store";


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) =>{

    root.render(
        <React.StrictMode>
            <App
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());
store.subscribe( () => {
    let state = store.getState()
    rerenderEntireTree(state);
});