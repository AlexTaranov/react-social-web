import React from 'react';
import userPhoto from '../../../src/assets/images/avatar-deffault.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let UsersListClass = (props) => {

    let countPages = Math.ceil(props.totalUsersCount / props.pageSize);

    let pagesList = [];

    for (let i = 1; i <= countPages; i++) {
        pagesList.push(i);
    }

    let pagesListView = pagesList.map( p => {
        return <li className={props.currentPage === p ? 'b-pagination_item m-active' : 'b-pagination_item'}
                   onClick={(event) => {props.onChangePage(p)}}>{p}</li>
    });

    let userList = props.users.map(u =>
        <div className="b-user" key={u.id}>
            <div className="b-user_thumnail">
                <figure className="b-user_thumnail-img">
                    <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                    </NavLink>
                </figure>
                {u.followed
                    ? <button className="b-user_thumnail-follow m-unfollow" onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                "API-KEY" : "40e4bdc3-98a4-4981-b544-301ca7484e7d"
                            }
                        }).then(responce => {
                            if (responce.data.resultCode === 0) {
                                props.unfollow(u.id)
                            }
                        });

                    }}>Unfollow</button>
                    : <button className="b-user_thumnail-follow m-follow" onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                "API-KEY" : "40e4bdc3-98a4-4981-b544-301ca7484e7d"
                            }
                        }).then(responce => {
                            if (responce.data.resultCode === 0) {
                                props.follow(u.id)
                            }
                        });

                    }}>Follow</button>
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
};


export default UsersListClass;
