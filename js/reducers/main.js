/**
 * Created by isp on 9/29/17.
 */

import { HANDLE_NEXT, HANDLE_PREVIOUS } from '../constants/ActionTypes'

const initialState = {
    finished: false,
    stepIndex: 0
};

export default function main(state = initialState, action) {
    switch (action.type) {
        case HANDLE_NEXT:
            return {
                finished: state.stepIndex >= 3,
                stepIndex: state.stepIndex + 1
            };
        case HANDLE_PREVIOUS:
            return {
                finished: state.finished,
                stepIndex: state.stepIndex > 0 ? state.stepIndex - 1 : 0
            };
        default:
            return state;
    }
}
