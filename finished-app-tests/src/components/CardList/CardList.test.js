import React from 'react';
import CardListComponent from './index';
import SearchBar from '../SearchBar';
import { shallow } from 'enzyme';

const Foo = () => (
  <div>
    <span>Enzyme is fun!</span>
  </div>
);

test('shallow', () => {
  const wrapper = shallow(<Foo />);
  expect(wrapper.find('span').text()).toBe('Enzyme is fun!');
});
