import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import facts from './facts';
import file from './file';
import questionnaire from './questionnaire';

export default combineReducers({
    facts,
    file,
    questionnaire
});
