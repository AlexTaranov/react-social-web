import React from 'react';
import UserPost from './userpost';

const ListPosts = (props) => {
    let postData = [
        {idPost: 1, message: 'Hello, its my first Post?', likesCount: "32", avatar: 'http://gameszon.net/content/cats-img/avatar3.png'},
        {idPost: 1, message: 'Very good', likesCount: "25", avatar: 'https://writercenter.ru/uploads/images/01/80/70/2017/07/01/avatar_ratsh_194510_64x64.jpg'}
    ]

    return (
        <div className="b_posts">
            <h2 className="b_posts__title">My Posts</h2>
            <div className="b_posts__newpost">
                <textarea name="mymsg" id="mymsg" placeholder="your news" className="b_posts__newmsg"></textarea>
                <button className="b_posts__newsubmit">Send</button>
            </div>

            <div className="b_posts__list">
                <UserPost
                    idPost={postData[0].idPost}
                    message={postData[0].message}
                    likesCount={postData[0].likesCount}
                    avatar={postData[0].avatar}
                />
                <UserPost
                    idPost={postData[1].idPost}
                    message={postData[1].message}
                    likesCount={postData[1].likesCount}
                    avatar={postData[1].avatar}
                />
            </div>
        </div>
    );
}

export default ListPosts;
