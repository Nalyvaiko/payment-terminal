import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './paymentActions';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

describe('Payment actions', () => {
  it('should create an action CREATE_PAYMENT_SUCCESS', () => {
    const payment = {
      id: 'beeline',
      accountNumber: '+7 123 456 78 90',
      amount: '900'
    };

    const expected = {
      type: ActionTypes.CREATE_PAYMENT_SUCCESS,
      payment
    };

    const actual = ActionCreators.createPaymentSuccess(payment);
    expect(actual).toEqual(expected);
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Payment async actions', () => {
  it('loadPayments() should return a function and should create BEGIN_AJAX_CALL and LOAD_PAYMENTS_SUCCESS', (done) => {

    const expectedActions = [
      {type: ActionTypes.BEGIN_AJAX_CALL},
      {type: ActionTypes.LOAD_PAYMENTS_SUCCESS, body: {payments: [{id: 'beeline', accountNumber: '+7 123 456 78 90', amount: '900'}]} }
    ];

    expect(typeof (ActionCreators.loadPayments())).toEqual('function');

    const store = mockStore({payments: []}, expectedActions);
    store.dispatch(ActionCreators.loadPayments())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(ActionTypes.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(ActionTypes.LOAD_PAYMENTS_SUCCESS);
      done();
    });
  });
});
