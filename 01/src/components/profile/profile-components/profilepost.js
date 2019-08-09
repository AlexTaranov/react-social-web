import React from 'react';

const ProfilePost = (props) => {
    return (
        <div className="b_posts__list_item">
            <div className="b_post_item">
                <figure className="b_post_item__avatar"><img src="http://gameszon.net/content/cats-img/avatar3.png" alt="avatar"/></figure>
                <div className="b_post_item__msg">Hey!!</div>

                <div className="b_likes">
                    <span className="b_likes__like">like</span>
                </div>
            </div>
        </div>
    );
}

export default ProfilePost;
