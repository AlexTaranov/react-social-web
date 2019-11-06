import React from 'react';
import * as axios from 'axios';
import userPhoto from '../../../src/assets/images/avatar-deffault.png'

class UsersListClass extends  React.Component {
    //
    // constructor(props) {
    //     super(props);
    // };

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0//users').then(responce => {
            this.props.setUsers(responce.data.items);
        });
    }

    render() {

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
                <button>Get User</button>
                {userList}
            </div>
        );
    }
}

export default UsersListClass;
