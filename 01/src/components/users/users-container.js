import {connect} from "react-redux";
import {setUsersAC, userFollowAC, userUnfollowAC, setPageAC, setUsersTotalCountAC, toggleIsFetchingAC} from "../../redux/reducer-users";
import React from "react";
import * as axios from "axios";
import UsersListClass from "./users-list-classes";
import Preloader from "../common/preloader/Preloader"

class UsersListAPI extends  React.Component {
    //
    // constructor(props) {
    //     super(props);
    // };

    componentDidMount() {
        this.props.toggleIsFetchingAC(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true}).then(responce => {
            this.props.toggleIsFetchingAC(false);
            this.props.setUsersAC(responce.data.items);
            this.props.setUsersTotalCountAC(responce.data.totalCount);
        });
    };

    onChangePage = (page_number) => {
        this.props.setPageAC(page_number);
        this.props.toggleIsFetchingAC(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page_number}&count=${this.props.pageSize}`, {withCredentials: true}).then(responce => {
            this.props.toggleIsFetchingAC(false);
            this.props.setUsersAC(responce.data.items);
        });
    };

    render() {
        return (
            <div className="b-userlist-wrapper">
                {this.props.isFetching ? <Preloader/> : null}
                <UsersListClass
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onChangePage={this.onChangePage}
                    users={this.props.users}
                    follow={this.props.userFollowAC}
                    unfollow={this.props.userUnfollowAC}
                />
            </div>
        );
    }
}


let usersStateToProps = (state) => {
    return {
        users: state.usersPage.userData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};


export default connect(usersStateToProps, {
    userFollowAC,
    userUnfollowAC,
    setUsersAC,
    setPageAC,
    setUsersTotalCountAC,
    toggleIsFetchingAC
})(UsersListAPI)

// let usersDispatchToProps = (dispatch) => {
//     return {
//         follow: (id) => {
//             dispatch(userFollowAC(id));
//         },
//         unfollow: (id) => {
//             dispatch(userUnfollowAC(id));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (page_number) => {
//             dispatch(setPageAC(page_number));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount));
//         },
//         toggleIsFetchingAC: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// };
