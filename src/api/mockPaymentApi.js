import uuid from 'uuid/v4';
import delay from './delay';
import {getFormattedDateTime} from '../utils/dates';


const payments = [];

const generateId = () => uuid();

class PaymentApi {
  static getAllPayments() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...payments]);
      }, delay);
    });
  }

  static proceedPayment(payment) {
    payment = {...payment};

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side random response
        if (Math.random() > 0.5) {
          reject(`Payment proceed rejected. Try one more time.`);
        }

        payment.id = generateId();
        payment.date = getFormattedDateTime();
        payments.push(payment);
        resolve(payment);
      }, delay);
    });
  }
}

export default PaymentApi;
