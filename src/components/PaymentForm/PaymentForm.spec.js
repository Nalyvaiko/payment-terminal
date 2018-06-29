import React from 'react';
import { mount, shallow } from 'enzyme';
import PaymentForm from './PaymentForm';
import TextInput from '../common/TextInput';
import {errorMessage} from '../../constants/messages';


describe('<PaymentForm />', () => {
  it('should contain <TextInput /> components', () => {
    const wrapper = mount(<PaymentForm
      proceedPayment={jest.fn()}
      proceedingPayment={false}
      paymentError={false}
    />);
    const allInputs = wrapper.find(TextInput);

    expect(allInputs.length).toEqual(2);
    expect(allInputs.at(0).props().name).toEqual('accountNumber');
    expect(allInputs.at(0).props().value).toEqual('+7 ');
    expect(allInputs.at(1).props().name).toEqual('amount');
    expect(allInputs.at(1).props().value).toEqual('');
  });

  it('should contain errorMessage when server response with error', () => {
    const wrapper = shallow(<PaymentForm
      proceedPayment={jest.fn()}
      proceedingPayment={false}
      paymentError={true}
    />);
    const expected = <span>{errorMessage}</span>;

    expect(wrapper.contains(expected)).toBeTruthy();
  });

  it('should not contain errorMessage when no errors from server', () => {
    const wrapper = shallow(<PaymentForm
      proceedPayment={jest.fn()}
      proceedingPayment={false}
      paymentError={false}
    />);
    const expected = <span>{errorMessage}</span>;

    expect(wrapper.contains(expected)).toBeFalsy();
  });

  it('should disable button when proceeding payment', () => {
    const wrapper = shallow(<PaymentForm
      proceedPayment={jest.fn()}
      proceedingPayment={true}
      paymentError={true}
    />);

    const button = wrapper.find('button');
    expect(button.props().disabled).toBeTruthy();
  });

  it('should handle form submit', () => {
    const wrapper = mount(<PaymentForm
      proceedPayment={jest.fn()}
      proceedingPayment={false}
      paymentError={false}
    />);

    const spySubmit = jest.spyOn(wrapper.instance(), 'handleSubmit');
    wrapper.instance().forceUpdate();

    expect(spySubmit).not.toBeCalled();
    wrapper.find('form').simulate('submit', {preventDefault: () => {}});
    expect(spySubmit).toBeCalled();
  });

  it('should call onChange when text input changes', () => {
    const wrapper = mount(<PaymentForm
      proceedPayment={jest.fn()}
      proceedingPayment={false}
      paymentError={false}
    />);

    const spySubmit = jest.spyOn(wrapper.instance(), 'onChange');
    wrapper.instance().forceUpdate();

    expect(spySubmit).not.toBeCalled();
    wrapper.find('input').last().simulate('change');
    expect(spySubmit).toBeCalled();
  });

  it('should proceed payment when no errors on form', () => {
    const proceedPayment = jest.fn();
    const wrapper = shallow(<PaymentForm
      proceedPayment={proceedPayment}
      proceedingPayment={false}
      paymentError={false}
    />);

    wrapper.setState({
      accountNumber: '+7 123 456 78 90',
      amount: '500',
      errors: {}
    });

    expect(proceedPayment).not.toBeCalled();
    wrapper.find('form').simulate('submit', {preventDefault: () => {}});
    expect(proceedPayment).toBeCalled();
  });

  it('should not proceed payment when errors or invalid data', () => {
    const proceedPayment = jest.fn();
    const wrapper = shallow(<PaymentForm
      proceedPayment={proceedPayment}
      proceedingPayment={false}
      paymentError={false}
    />);

    wrapper.setState({
      accountNumber: '+7 123 456 78',
      amount: '5000',
      errors: {}
    });

    expect(proceedPayment).not.toBeCalled();
    wrapper.find('form').simulate('submit', {preventDefault: () => {}});
    expect(proceedPayment).not.toBeCalled();
  });
});
