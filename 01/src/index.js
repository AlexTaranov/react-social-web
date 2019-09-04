import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import appState from './redux/state'
import {addPost, updateNewPostText, subscribe} from "./redux/state";

let rerenderPage = (appState) => {
    ReactDOM.render(
        <App appState={appState} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}


rerenderPage(appState);

subscribe(rerenderPage);
