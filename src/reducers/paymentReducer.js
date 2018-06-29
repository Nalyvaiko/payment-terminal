import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default (state = initialState.payments, action) => {
  switch (action.type) {
    case types.LOAD_PAYMENTS_SUCCESS:
      return action.payments;

    case types.CREATE_PAYMENT_SUCCESS:
      return [
        ...state,
        {...action.payment}
      ];

    default:
      return state;
  }
};
