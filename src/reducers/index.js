import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import payments from './paymentReducer';
import operators from './operatorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';


const rootReducer = combineReducers({
  operators,
  payments,
  ajaxCallsInProgress,
  routing: routerReducer
});

export default rootReducer;
