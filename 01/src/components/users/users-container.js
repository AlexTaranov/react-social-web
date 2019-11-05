import UsersList from './users-list'
import {connect} from "react-redux";
import {setUsersAC, userFollowAC, userUnfollowAC} from "../../redux/reducer-users";

let usersStateToProps = (state) => {
    return {
        users: state.usersPage.userData
    }
}

let usersDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(userFollowAC(id));
        },
        unfollow: (id) => {
            dispatch(userUnfollowAC(id));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
    }
}


export default connect(usersStateToProps, usersDispatchToProps)(UsersList)
