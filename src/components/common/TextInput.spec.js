import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './TextInput';

describe('<TextInput />', () => {
  const initProps = {
    id: 'testId',
    name: 'testName',
    type: 'text',
    label: 'testLabel',
    info: 'testInfo',
  };

  it('should be a label element', () => {

    const wrapper = shallow(<TextInput {...initProps} />);
    const inputWrapperType = wrapper.type();
    expect(inputWrapperType).toEqual('label');
  });

  it('should handle change', () => {
    const props = {
      ...initProps,
      onChange: jest.fn(),
      value: '100'
    };

    const wrapper = shallow(<TextInput {...props} />);
    const inputField = wrapper.find('input');
    const changeEvent = {target: {value: '101'}};

    expect(props.onChange).not.toBeCalled();
    inputField.simulate('change', changeEvent);
    expect(props.onChange).toBeCalledWith(changeEvent);
  });

  // Example of testing the value of a prop
  it('should apply placeholder', () => {
    const props = {
      ...initProps,
      placeholder: 'Type Here',
    };

    const wrapper = shallow(<TextInput {...props} />);
    const placeholder = wrapper.find('input').prop('placeholder');
    expect(placeholder).toEqual('Type Here');
  });
});
