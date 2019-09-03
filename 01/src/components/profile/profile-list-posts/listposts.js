import React from 'react';
import UserPost from '../profile-userposts/userpost';


const ListPosts = (props) => {

    let postsList = props.posts.map(p => <UserPost idPost={p.idPost} message={p.message} likesCount={p.likesCount} avatar={p.avatar}/> );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost(props.newPostText);
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className="b_posts">
            <h2 className="b_posts__title">My Posts</h2>
            <div className="b_posts__newpost">
                <textarea ref={newPostElement} name="mymsg" value={props.newPostText} onChange={onPostChange} id="mymsg" placeholder="your news" className="b_posts__newmsg" />
                <button className="b_posts__newsubmit" onClick={addPost}>New Post</button>
            </div>

            <div className="b_posts__list">
                {postsList}
            </div>
        </div>
    );
}

export default ListPosts;
