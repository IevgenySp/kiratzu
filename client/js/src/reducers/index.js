import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import facts from './facts';
import file from './file';
import questionnaire from './questionnaire';
import turnsList from './turnsList';

export default combineReducers({
    routing: routerReducer,
    facts,
    file,
    questionnaire,
    turnsList
});
