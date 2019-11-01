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
        follow: (userId) => {
            dispatch(userFollowAC(userId));
            console.log('must follow');
            console.log(userId + ' id')
        },
        unfollow: (userId) => {
            dispatch(userUnfollowAC(userId));
            console.log('must unfollow');
            console.log(userId + ' id')
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
            console.log('must setUSers')
        },
    }
}


export default connect(usersStateToProps, usersDispatchToProps)(UsersList)
