import operatorApi from '../api/mockOperatorApi';
import * as types from '../constants/actionTypes';
import { beginAjaxCall } from './ajaxStatusActions';

export const loadOperatorsSuccess = operators => ({
  type: types.LOAD_OPERATORS_SUCCESS,
  operators
});

export const loadOperators = () =>
  (dispatch) => {
    dispatch(beginAjaxCall());

    return operatorApi.getAllOperators().then((operators) => {
      dispatch(loadOperatorsSuccess(operators));
    }).catch((error) => {
      throw(error);
    });
  };
