import * as types from '../constants/actionTypes';
import initialState from './initialState';

const actionTypeEndsInSuccess = type =>
  type.substring(type.length - 8) === '_SUCCESS';

export default (state = initialState.ajaxCallsInProgress, action) => {
  return action.type === types.BEGIN_AJAX_CALL
    ? state + 1
    : (action.type === types.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type))
      ? state - 1
      : state;
};
