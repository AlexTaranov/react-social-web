import React from 'react';


let UsersList = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    userId: 1,
                    userName: 'Name111',
                    userLocation: {city: 'Kyiv', country: 'Ukraine'},
                    userStatus: "Tratatata",
                    userFollow: true,
                    avatar: 'http://gameszon.net/content/cats-img/avatar3.png'
                },
                {
                    userId: 2,
                    userName: 'Name222',
                    userLocation: {city: 'Minsk', country: 'Belarus'},
                    userStatus: "Tratatata222",
                    userFollow: false,
                    avatar: 'http://gameszon.net/content/cats-img/avatar3.png'
                },
                {
                    userId: 3,
                    userName: 'Name333',
                    userLocation: {city: 'Odessa', country: 'Ukraine'},
                    userStatus: "Tratatata333",
                    userFollow: true,
                    avatar: 'http://gameszon.net/content/cats-img/avatar3.png'
                }
            ]
        )
    }

    let userList = props.users.map( u =>
        <div className="b-user" key={u.userId}>
            <div className="b-user_thumnail">
                <figure className="b-user_thumnail-img">
                    <img src={u.avatar} alt=""/>
                </figure>
                { u.userFollow
                    ? <button className="b-user_thumnail-follow m-follow" onClick={() => { props.unfollow(u.userId) } } >Follow</button>
                    : <button className="b-user_thumnail-follow m-unfollow" onClick={() => { props.follow(u.userId) } } >Unfollow</button>
                }

            </div>
            <div className="b-user_info">
                <div className="b-user_info-name">{u.userName}</div>
                <div className="b-user_info-status">{u.userStatus}</div>
                <div className="b-user_info-location">
                <div className="b-user_info-location-city">{u.userLocation.city}</div>
                <div className="b-user_info-location-country">{u.userLocation.country}</div>
            </div>
            </div>
        </div>
    )

    return (
        <div className='b-users-list'>
            {userList}
        </div>
    );
}

export default UsersList;
