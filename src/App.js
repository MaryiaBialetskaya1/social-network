import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*"
                               element={<DialogsContainer store={props.store}/>}
                        />
                        <Route path="/profile"
                               element={<Profile store={store}/>}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;

/*
Component - function which returns jsx(html) markup
 */
