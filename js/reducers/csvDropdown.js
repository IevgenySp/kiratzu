/**
 * Created by isp on 10/9/17.
 */

import { UPDATE_CSV_LIST, UPDATE_CSV_ACTIVE_VALUE } from '../constants/ActionTypes'

const initialState = {
    initString: 'Select a sample dataset',
    value: 0,
    listItems: []
};

export default function csvDropdown(state = initialState, action) {
    switch (action.type) {
        case UPDATE_CSV_LIST:
            return {
                initString: state.initString,
                value: state.value,
                listItems: action.list
            };
        case UPDATE_CSV_ACTIVE_VALUE:
            return {
                initString: state.initString,
                value: action.value,
                listItems: state.listItems
            };
        default:
            return state;
    }
}