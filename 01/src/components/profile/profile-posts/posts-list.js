import React from 'react';
import PostSingle from './post-single';

const PostsList = (props) => {

    let postsList = props.posts.map(p => <PostSingle idPost={p.idPost} message={p.message} likesCount={p.likesCount} avatar={p.avatar}/> );

    let newPostElement = React.createRef();

    let newPost = () => {
        props.newPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className="b_posts">
            <h2 className="b_posts__title t-title-3">My Posts</h2>
            <div className="b_posts__newpost">
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} id="mymsg" placeholder="your news" className="b_posts__newmsg" />
                <button className="b-btn b_posts__newsubmit" onClick={newPost}>New Post</button>
            </div>

            <div className="b_posts__list">
                {postsList}
            </div>
        </div>
    );
}

export default PostsList;
