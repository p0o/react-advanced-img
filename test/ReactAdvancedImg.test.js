import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import Img from '../src/ReactAdvancedImg.js';

test('Render component', (t) => {
  let click = () => {};
  let wrapper = shallow(<Img src="something" />);
  console.log(wrapper.find('img'))
  t.is(wrapper.find('img'), 2);
});
