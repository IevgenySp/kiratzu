import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { BrowserRouter, withRouter } from 'react-router-dom';

import reducer from './src/reducers';
import Routes from './routes';

import Application from './src/components/application.jsx'

import {
    createStore,
    combineReducers,
    applyMiddleware }  from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

//const history = syncHistoryWithStore(withRouter, store);

render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Routes />;
            </div>
        </BrowserRouter>
    </Provider>
    ,
    document.body
);

console.log(store.getState());
