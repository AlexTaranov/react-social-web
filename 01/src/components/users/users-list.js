import React from 'react';

let UsersList = (props) => {
    return <div className='b-users-list'>
        {
            props.users.map( u => u)
        }
    </div>
}

export default UsersList;
