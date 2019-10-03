import React from 'react';
import UsersList from "./users-list";

const UsersListContainer = (props) => {
    return (
        <div className="b-users_container">
            <div className="b-users">
                <UsersList />
            </div>
        </div>
    );
}

export default UsersListContainer;