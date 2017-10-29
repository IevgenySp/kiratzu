/**
 * Created by isp on 9/29/17.
 */

import * as types from '../constants/ActionTypes';

export const handleNext = () => ({ type: types.HANDLE_NEXT });
export const handlePrevious = () => ({ type: types.HANDLE_PREVIOUS});
export const updateCsvList = list => ({ type: types.UPDATE_CSV_LIST, list});
export const updateCsvActiveValue = value => ({ type: types.UPDATE_CSV_ACTIVE_VALUE, value});
export const updateTextInputLink = link => ({ type: types.UPDATE_TEXT_INPUT_LINK, link});
export const updateTextInputValue = value => ({ type: types.UPDATE_TEXT_INPUT_VALUE, value});