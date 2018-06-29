import uuid from 'uuid/v4';
import delay from './delay';
import {getFormattedDateTime} from '../utils/dates';


const payments = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/payments/react-flux-building-applications",
    authorId: "cory-house",
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/payments/writing-clean-code-humans",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://www.pluralsight.com/payments/architecting-applications-dotnet",
    authorId: "cory-house",
    length: "2:52",
    category: "Software Architecture"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://www.pluralsight.com/payments/career-reboot-for-developer-mind",
    authorId: "cory-house",
    length: "2:30",
    category: "Career"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.pluralsight.com/payments/web-components-shadow-dom",
    authorId: "cory-house",
    length: "5:10",
    category: "HTML5"
  }
];

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
