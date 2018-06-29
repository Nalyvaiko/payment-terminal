import React from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import TextInput from '../common/TextInput';
import {errorMessage} from '../../constants/messages';


class PaymentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accountNumber: '+7',
      amount: '',
      errors: {}
    };
  }

  onChange = ({target}) => {
    let {name, value} = target;

    if (name === 'amount') {
      if (value.length > 0 && (!/^\d+$/.test(value) || value < 1 || value > 1000)) {
        return false;
      } else {
        value = Number(value).toString();
      }
    }

    this.setState({[name]: value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {accountNumber, amount} = this.state;
    const errors = {};

    if (accountNumber.length !== 16) {
      errors.accountNumber = true;
    }
    if (amount < 1 || amount > 1000) {
      errors.amount = true;
    }

    this.setState({errors});

    if (Object.keys(errors).length === 0) {
      this.props.proceedPayment({accountNumber, amount});
    }
  }



  render() {
    const {accountNumber, amount, errors} = this.state;
    const {proceedingPayment, paymentError} = this.props;

    return (
      <form
        className="payment-form"
        onSubmit={this.handleSubmit}>
        <InputMask
          mask="+7 999 999 99 99"
          maskChar={null}
          value={accountNumber}
          onChange={this.onChange}>
          {(inputProps) => (
            <TextInput
              {...inputProps}
              id="accountNumber"
              name="accountNumber"
              type="text"
              label="Номер телефона"
              info="Например, +7 123 456 78 90"
              error={errors.accountNumber}
            />
          )}
        </InputMask>
        <TextInput
          id="amount"
          name="amount"
          type="number"
          min="1"
          max="1000"
          label="Сумма"
          info="1,00 - 1000,00 руб"
          placeholder="руб"
          value={amount}
          onChange={this.onChange}
          error={errors.amount}
        />
        <button
          type="submit"
          disabled={proceedingPayment}>
            {proceedingPayment ? 'Запрос ...' : 'Оплатить'}
        </button>
        {paymentError && <span>{errorMessage}</span>}
      </form>
    );
  }
}

PaymentForm.propTypes = {
  proceedPayment: PropTypes.func.isRequired,
  proceedingPayment: PropTypes.bool.isRequired,
  paymentError: PropTypes.bool.isRequired,
};

export default PaymentForm;
