import React from "react";
import s from './Navbar.module.css';

const Navbar = () =>{
    return(
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <a href='https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#debugging'>Profile</a>
            </div>
            <div className={s.item}>
                <a href='https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#debugging'>Messages</a>
            </div>
            <div className={s.item}>
                <a href='https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#debugging'>News</a>
            </div>
            <div className={s.item}>
                <a href='https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#debugging'>Music</a>
            </div>
            <div className={s.item}>
                <a href='https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#debugging'>Settings</a>
            </div>
        </nav>
    )
}
export default Navbar;
