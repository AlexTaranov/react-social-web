import React from 'react';

const UsersItem = (props) => {
    return (
        <div className="b-user" id={props.idUser}>
            <div className="b-user_thumnail">
                <figure className="b-user_thumnail-img">
                    <img src={props.avatar} alt=""/>
                </figure>
                <span className="b-user_thumnail-follow m-follow">Follow</span>
            </div>
            <div className="b-user_info">
                <div className="b-user_info-name">{props.name}</div>
                <div className="b-user_info-status">{props.status}</div>
                <div className="b-user_info-location">{props.location}</div>
            </div>
        </div>
    );
}

export default UsersItem;