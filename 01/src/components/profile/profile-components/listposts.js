import React from 'react';
import ProfilePost from './profilepost';

const ListPosts = () => {
    return (
        <div className="b_posts">
            <h2 className="b_posts__title">My Posts</h2>
            <div className="b_posts__newpost">
                <textarea name="mymsg" id="mymsg" placeholder="your news"></textarea>
                <button>Send</button>
            </div>

            <div className="b_posts__list">
                <ProfilePost />
            </div>
        </div>
    );
}

export default ListPosts;
