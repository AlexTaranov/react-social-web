import UsersListAPI from './users-list-api'
import {connect} from "react-redux";
import {setUsersAC, userFollowAC, userUnfollowAC, setPageAC, setUsersTotalCountAC} from "../../redux/reducer-users";

let usersStateToProps = (state) => {
    return {
        users: state.usersPage.userData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
};

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
        setCurrentPage: (page_number) => {
            dispatch(setPageAC(page_number));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        },
    }
}


export default connect(usersStateToProps, usersDispatchToProps)(UsersListAPI)
