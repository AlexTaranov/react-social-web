import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
// import store from "./redux/store";
import store from "./redux/redux-store";

let rerenderPage = (appState) => {
    ReactDOM.render(
        <App
            store={store}
            appState={appState} //
            dispatch={store.dispatch.bind(store)} />, // передаем в диспатч окружение store, не понял зачем здесь

        document.getElementById('root')
    );
}

rerenderPage(store.getState()); // выполняем функцию ререндеринга страницы с получением всего стейта с помощью функции которая ретурнит его
store.subscribe(() => { // subscribe это функция - redux
    let state = store.getState();
    rerenderPage(state);
}); // функция наблюдатель которая рендерит страницу
