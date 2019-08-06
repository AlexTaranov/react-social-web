import React from 'react'

const Aside = () => {
    return (
        <aside className="b_sidebar">
            <nav className="b_nav">
                <ul className="b_nav_list">
                    <li className="b_nav_list__item">Profile</li>
                    <li className="b_nav_list__item">Messages</li>
                    <li className="b_nav_list__item">News</li>
                    <li className="b_nav_list__item">Music</li>
                    <li className="b_nav_list__item">Settings</li>
                </ul>
            </nav>
        </aside>
    );
}

export default Aside;