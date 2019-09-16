import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import store from "./redux/state";

let rerenderPage = (appState) => {
    ReactDOM.render(
        <App
            appState={appState}
            // addPost={store.addPost.bind(store)}
            // updateNewPostText={store.updateNewPostText.bind(store)}
            // addMsg={store.addMsg.bind(store)}
            // updateNewMessageText={store.updateNewMessageText.bind(store)}
            dispatch={store.dispatch.bind(store)} />,
        document.getElementById('root')
    );
}


rerenderPage(store.getState());

store.subscribe(rerenderPage);
