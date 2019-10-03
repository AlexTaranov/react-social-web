import React from 'react';
import UsersItem from "./users-item";

const UsersList = (props) => {
    return (
        <div className="b-user_list">
            <div className="b-users_inner">
                <UsersItem />
            </div>
        </div>
    );
}

export default UsersList;