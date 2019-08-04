import React from 'react';

const Aside = () => {
    return (
        <aside className="b-sidebar">
            <nav className="b-nav">
                <ul className="b-nav-list">
                    <li className="b-nav-list_item">Profile</li>
                    <li className="b-nav-list_item">Messages</li>
                    <li className="b-nav-list_item">News</li>
                    <li className="b-nav-list_item">Music</li>
                    <li className="b-nav-list_item">Settings</li>
                </ul>
            </nav>
        </aside>
    );
}

export default Aside;