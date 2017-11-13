import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { BrowserRouter, withRouter } from 'react-router-dom';

import reducer from './src/reducers';
import {createStore, combineReducers, applyMiddleware }  from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import Questionnarie from './src/components/Questionnaire.js';
import File from './src/components/File.js';
import Facts from './src/components/Facts.js';
import AnswerSteps from './src/components/AnswerSteps';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route exact path="/" component={Questionnarie}/>
            <Route path="/questionnaire" component={Questionnarie}/>
            <Route path="/file-upload" component={File}/>
            <Route path="/facts" component={Facts}/>
            <Route path="/answer-steps" component={AnswerSteps}/>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);

//console.log(store.getState());
