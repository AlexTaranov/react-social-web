import React from 'react';

const UserPost = (props) => {
    return (
        <div className="b_posts__list_item">
            <div className="b_posts_item" id={props.idPost}>
                <figure className="b_posts_item__avatar"><img src={props.avatar} alt="avatar"/></figure>
                <div className="b_posts_item__wrap">
                    <div className="b_posts_item__msg">{props.message}</div>

                    <div className="b_likes">
                        <span className="b_likes__like">{props.likesCount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPost;
