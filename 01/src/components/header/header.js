import React from 'react';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className="b-header">
            <div className="b-logo">
            </div>

            <div className="b-header_login">
                {props.isAuth ? props.login : <NavLink to={'/login'}>LoginPage</NavLink>}
            </div>
        </header>
    );
}

export default Header;
