import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs messages={props.messages} dialogs={props.dialogs}/>}/>
                        <Route path="/profile" element={<Profile
                            posts={props.posts}
                            addPost = {props.addPost}

                        />}/>

                        {/*<Route path="/dialogs/*" element={<Dialogs messages={props.state.dialogsPage.messages} dialogs={props.state.dialogsPage.dialogs}/>}/>*/}
                        {/*<Route path="/profile" element={<Profile posts={props.state.profilePage.posts}/>}/>*/}
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
