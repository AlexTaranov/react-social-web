import React from 'react';
import UsersListContainer from "./users-elements/users-list-container";

const Users = (props) => {
    return (
        <main className="l_users">
            <h1>Users</h1>

            <div className="b-users">
                <UsersListContainer />
            </div>
        </main>
    );
}

export default Users;