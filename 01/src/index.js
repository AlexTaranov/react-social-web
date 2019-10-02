import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
// import store from "./redux/store";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

let rerenderPage = () => {
    ReactDOM.render(
            <Provider store={store}>
                <App store={store} />
            </Provider>,
        document.getElementById('root')
    );
}

rerenderPage(); // выполняем функцию ререндеринга страницы с получением всего стейта с помощью функции которая ретурнит его

store.subscribe(() => { // subscribe это функция - redux
    rerenderPage();
}); // функция наблюдатель которая рендерит страницу
