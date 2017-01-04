import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import Img from '../src/ReactAdvancedImg.js';

test('Render img component', (t) => {
  let wrapper = shallow(<Img src="something" />);
  t.is(wrapper.find('img').length, 1);
});
