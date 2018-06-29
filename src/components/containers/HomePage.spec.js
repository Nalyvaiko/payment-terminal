import React from 'react';
import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';

import ConnectedHomePage, { HomePage } from './HomePage';
import Operators from '../Operators';
import initialState from '../../reducers/initialState';


describe('<HomePage />', () => {
  const actions = {loadOperators: jest.fn()};
  const operators = [{id: 'beeline', name: 'Билайн'}];

  it('should contain <Operators />', () => {
    const wrapper = shallow(
      <HomePage
        operators={operators}
        actions={actions}
        ajaxCallsInProgress={0}
      />
    );

    expect(wrapper.find(Operators).length).toEqual(1);
  });

  it('should call componentDidMount()', () => {
    const componentDidMountSpy = jest.spyOn(HomePage.prototype, 'componentDidMount');
    shallow(
      <HomePage
        operators={[]}
        actions={actions}
        ajaxCallsInProgress={0}/>
    );

    expect(componentDidMountSpy).toHaveBeenCalled();
  });

  it('calls loadOperators after component did mount', () => {
    shallow(
      <HomePage
        operators={[]}
        actions={actions}
        ajaxCallsInProgress={0}/>
    );

    expect(actions.loadOperators).toHaveBeenCalledWith();
  });
});
