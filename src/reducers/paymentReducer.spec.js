import * as ActionTypes from '../constants/actionTypes';
import reducer from './paymentReducer';

describe('Reducers::Payments', () => {
  const getInitialState = () => [];

  const getAppState = () => ({payments: [{
    id: '306fdedb-26ee-4245-be95-f5722c063f1f',
    accountNumber: '+7 123 456 78 90',
    amount: '900',
    date: '6/29 8:27:06'
  }]});

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle LOAD_PAYMENTS_SUCCESS', () => {
    const { payments } = getAppState();
    const action = { type: ActionTypes.LOAD_PAYMENTS_SUCCESS, payments };

    expect(reducer(getAppState(), action)).toEqual(payments);
  });

  it('should handle CREATE_PAYMENT_SUCCESS', () => {
    const { payments } = getAppState();
    const payment = {
      id: 'e6d74c35-5b7b-4de7-8932-1503967b878b',
      accountNumber: '+7 800 000 08 90',
      amount: '300',
      date: '6/29 9:00:00'
    };

    const action = { type: ActionTypes.CREATE_PAYMENT_SUCCESS, payment };
    expect(reducer(payments, action)).toEqual([...payments, {...payment}]);
  });
});
