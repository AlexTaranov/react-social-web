import React from 'react';
import UsersList from "./users-list";
import connect from "react-redux/es/connect/connect";
import {followAC, unfollowAC, setUserAC} from "../../../redux/reducer-users";

let UsersStateToProps = (state) => {
    return {
        users: state.usersPage.usersData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfolollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUserAC(users))
        }
    }
}


let UsersListMain = (props) => {
    return (
        <div className="b-users_container">
            <div className="b-users">
                <UsersList />
            </div>
        </div>
    );
}

const UsersListContainer = connect(UsersStateToProps, mapDispatchToProps)(UsersList);

export default UsersListContainer;