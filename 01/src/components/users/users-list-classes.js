import React from 'react';
import * as axios from 'axios';
import userPhoto from '../../../src/assets/images/avatar-deffault.png'

class UsersListClass extends  React.Component {
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
        let countPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pagesList = [];

        for (let i = 1; i <= countPages; i++) {
            pagesList.push(i);
        }

        let pagesListView = pagesList.map( p => {
            return <li className={this.props.currentPage === p ? 'b-pagination_item m-active' : 'b-pagination_item'}
                       onClick={(event) => {this.onChangePage(p)}}>{p}</li>
        });


        let userList = this.props.users.map(u =>
            <div className="b-user" key={u.id}>
                <div className="b-user_thumnail">
                    <figure className="b-user_thumnail-img">
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                    </figure>
                    {u.followed
                        ? <button className="b-user_thumnail-follow m-follow" onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Follow</button>
                        : <button className="b-user_thumnail-follow m-unfollow" onClick={() => {
                            this.props.follow(u.id)
                        }}>Unfollow</button>
                    }

                </div>
                <div className="b-user_info">
                    <div className="b-user_info-name">{u.name}</div>
                    <div className="b-user_info-status">{u.status}</div>
                    <div className="b-user_info-location">
                        <div className="b-user_info-location-city">{'u.userLocation.city'}</div>
                        <div className="b-user_info-location-country">{'u.userLocation.country'}</div>
                    </div>
                </div>
            </div>
        );

        return (

            <div className='b-users-list'>

                <div className="b-pagination">
                    <ul className="b-pagination_list">
                        {pagesListView}
                    </ul>
                </div>
                {userList}
            </div>
        );
    }
}

export default UsersListClass;
