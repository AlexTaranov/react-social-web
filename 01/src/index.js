import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
// import store from "./redux/store";
import store from "./redux/redux-store";
import {Provider} from "react-redux";


ReactDOM.render(
        <Provider store={store}>
            <App store={store} />
        </Provider>,
    document.getElementById('root')
);


