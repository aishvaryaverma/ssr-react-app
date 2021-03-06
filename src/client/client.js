// Startup point for the client side application
import 'babel-polyfill';
import React from 'react';
import axios from 'axios';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import Routes from './Routes';
import reducers from './reducers';

const axiosInstance = axios.create({
    baseURL: '/api'
});

const store = createStore(
    reducers,
    window.INITIAL_STATE,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
