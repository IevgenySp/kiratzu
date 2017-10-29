/**
 * Created by isp on 10/9/17.
 */

import { UPDATE_TEXT_INPUT_LINK, UPDATE_TEXT_INPUT_VALUE } from '../constants/ActionTypes'

const initialState = {
    link: '',
    inputValue: ''
};

export default function textInput(state = initialState, action) {
    switch (action.type) {
        case UPDATE_TEXT_INPUT_LINK:
            return {
                link: action.link,
                inputValue: state.inputValue
            };
        case UPDATE_TEXT_INPUT_VALUE:
            return {
                link: state.link,
                inputValue: action.value
            };
        default:
            return state;
    }
}