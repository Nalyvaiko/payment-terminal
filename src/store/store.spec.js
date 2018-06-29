import * as ActionTypes from '../constants/actionTypes';
import configureStore from './configureStore';


describe('Store', () => {
  it('should display results when necessary data is provided', () => {
    const store = configureStore();

    const state = {
      operators: [{
        id: 'mts',
        name: 'МТС'
      }, {
        id: 'beeline',
        name: 'Билайн'
      }, {
        id: 'megafon',
        name: 'Мегафон'
      }],
      payments: [{
        id: '306fdedb-26ee-4245-be95-f5722c063f1f',
        accountNumber: '+7 123 456 78 90',
        amount: '900',
        date: '6/29 8:27:06'
      }, {
        id: 'e6d74c35-5b7b-4de7-8932-1503967b878b',
        accountNumber: '+7 800 000 08 90',
        amount: '300',
        date: '6/29 9:00:00'
      }]
    };

    const actions = [
      { type: ActionTypes.LOAD_OPERATORS_SUCCESS, operators: state.operators },
      { type: ActionTypes.LOAD_PAYMENTS_SUCCESS, payments: state.payments },
      { type: ActionTypes.CREATE_PAYMENT_SUCCESS,  payment: {
        id: 'e6d74c35-5b7b-4de7-8932-1503967b878b',
        accountNumber: '+7 872 321 00 32',
        amount: '500',
        date: '6/29 12:23:11'
      }},
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = {...state, payments: [...state.payments, {
      id: 'e6d74c35-5b7b-4de7-8932-1503967b878b',
      accountNumber: '+7 872 321 00 32',
      amount: '500',
      date: '6/29 12:23:11'
    }]};

    expect(actual.operators).toEqual(expected.operators);
    expect(actual.payments).toMatchSnapshot();
  });
});
