import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import facts from './facts';
import file from './file';
import questionnaire from './questionnaire';
import turnsList from './turnsList';
import websocket from './websocket';

export default combineReducers({
    routing: routerReducer,
    websocket,
    facts,
    file,
    questionnaire,
    turnsList
});
