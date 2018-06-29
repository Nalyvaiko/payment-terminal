import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from './AboutPage';

describe('<AboutPage />', () => {
  it('should have a header called \'About\'', () => {
    const wrapper = shallow(<AboutPage />);
    const actual = wrapper.find('h2').text();
    const expected = 'About';

    expect(actual).toEqual(expected);
  });

  it('should have a header with \'header\' class', () => {
    const wrapper = shallow(<AboutPage />);
    const actual = wrapper.find('h2').prop('className');
    const expected = 'header';

    expect(actual).toEqual(expected);
  });

  it('should link to github', () => {
    const wrapper = shallow(<AboutPage />);
    const actual = wrapper.findWhere(n => n.prop('href') === 'https://github.com/Nalyvaiko').length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });
});
