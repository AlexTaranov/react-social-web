import React from 'react';
import UsersItem from "./users-item";

const UsersList = (props) => {
    let usersList = props.users.map(u => <UsersItem idUser={u.idUser} name={u.name} status={u.status} avatar={u.avatar} location={u.location}/> );


    return (
        <div className="b-users_list">
            <div className="b-users_inner">
                {usersList}
            </div>
        </div>
    );
}

export default UsersList;