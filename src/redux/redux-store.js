//import {combineReducers, legacy_createStore as createStore} from "redux";

import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer
});
let store = createStore(reducers);

export default store;