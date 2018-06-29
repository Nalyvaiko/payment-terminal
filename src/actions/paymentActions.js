import * as types from '../constants/actionTypes';
import paymentApi from '../api/mockPaymentApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export const loadPaymentsSuccess = payments => ({
  type: types.LOAD_PAYMENTS_SUCCESS,
  payments
});

export const createPaymentSuccess = payment => ({
  type: types.CREATE_PAYMENT_SUCCESS,
  payment
});

export const loadPayments = () =>
  (dispatch) => {
    dispatch(beginAjaxCall());

    return paymentApi.getAllPayments().then((payments) => {
      dispatch(loadPaymentsSuccess(payments));
    }).catch((error) => {
      throw(error);
    });
  };

export const proceedPayment = payment =>
  (dispatch) => {
    dispatch(beginAjaxCall());

    return paymentApi.proceedPayment(payment).then((payment) => {
      dispatch(createPaymentSuccess(payment));
    }).catch((error) => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
