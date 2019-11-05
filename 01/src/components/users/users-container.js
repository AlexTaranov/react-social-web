import UsersListClass from './users-list-classes'
import {connect} from "react-redux";
import {setUsersAC, userFollowAC, userUnfollowAC} from "../../redux/reducer-users";

let usersStateToProps = (state) => {
    return {
        users: state.usersPage.userData
    }
};

let usersDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(userFollowAC(id));
            console.log('123');
        },
        unfollow: (id) => {
            dispatch(userUnfollowAC(id));
            console.log('321');
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
    }
}


export default connect(usersStateToProps, usersDispatchToProps)(UsersListClass)
