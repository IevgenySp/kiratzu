/**
 * Created by isp on 9/29/17.
 */

import { combineReducers } from 'redux';
import main from './main';
import csvDropdown from './csvDropdown';
import textInput from './textInput';

const rootReducer = combineReducers({
    main,
    csvDropdown,
    textInput
});

export default rootReducer;