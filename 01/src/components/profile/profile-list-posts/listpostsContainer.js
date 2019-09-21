import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducer-profile";
import ListPosts from "./listposts";


const ListPostsContainer = (props) => {

    let state = props.store.getState();

    let newPost = () => {
        props.store.dispatch(addPostActionCreator()); //  Переменная addPostActionCreator это обьект который несет в себе тип акшена-криэйтора для ДИСПАТЧА
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text); // передается дефолтное значение textarea из стейта в значение обьекта в action
        props.store.dispatch(action);
    }

    return (
        <ListPosts
            updateNewPostText={onPostChange}
            newPost={newPost}
            newPostText={state.profilePage.newPostText}
            posts={state.profilePage.postData} />
    );
}

export default ListPostsContainer;
