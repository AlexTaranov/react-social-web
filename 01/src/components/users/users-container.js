import {connect} from "react-redux";
import {setUsersAC, userFollowAC, userUnfollowAC, setPageAC, setUsersTotalCountAC} from "../../redux/reducer-users";
import React from "react";
import * as axios from "axios";
import UsersListClass from "./users-list-classes";

class UsersListAPI extends  React.Component {
    //
    // constructor(props) {
    //     super(props);
    // };

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items);
            this.props.setTotalUsersCount(responce.data.totalCount);
        });
    };

    onChangePage = (page_number) => {
        this.props.setCurrentPage(page_number);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page_number}&count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items);
        });
    };

    render() {
        return (
            <UsersListClass
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onChangePage={this.onChangePage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        );
    }
}


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
