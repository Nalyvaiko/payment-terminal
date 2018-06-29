import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default (state = initialState.operators, action) => {
  switch (action.type) {
    case types.LOAD_OPERATORS_SUCCESS:
      return action.operators;

    default:
      return state;
  }
};
