import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

let postData = [
    {idPost: 1, message: 'Hello, its my first Post?', likesCount: "32", avatar: 'http://gameszon.net/content/cats-img/avatar3.png'},
    {idPost: 2, message: 'Very good', likesCount: "25", avatar: 'https://writercenter.ru/uploads/images/01/80/70/2017/07/01/avatar_ratsh_194510_64x64.jpg'},
    {idPost: 3, message: 'Very good 2222', likesCount: "31", avatar: 'http://gameszon.net/content/cats-img/avatar3.png'}
]

ReactDOM.render(
  <App posts={postData} />,
  document.getElementById('root')
);
