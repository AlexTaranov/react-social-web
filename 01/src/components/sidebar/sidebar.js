import React from 'react'
import { NavLink } from 'react-router-dom';

const Aside = () => {
    return (
        <aside className="b_sidebar">
            <nav className="b_nav">
                <ul className="b_nav_list">
                    <li className="b_nav_list__item">
                        <NavLink className="b_nav_list__link" activeClassName="m-active" to="/profile">Profile</NavLink>
                    </li>
                    <li className="b_nav_list__item">
                        <NavLink className="b_nav_list__link" activeClassName="m-active" to="/dialogs">Messages</NavLink>
                    </li>
                    <li className="b_nav_list__item">
                        <NavLink className="b_nav_list__link" activeClassName="m-active" to="/news">News</NavLink>
                    </li>
                    <li className="b_nav_list__item">
                        <NavLink className="b_nav_list__link" activeClassName="m-active" to="/music">Music</NavLink>
                    </li>
                    <li className="b_nav_list__item">
                        <NavLink className="b_nav_list__link" activeClassName="m-active" to="/settings">Settings</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Aside;