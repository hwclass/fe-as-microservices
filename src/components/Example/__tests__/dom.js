// __tests__/dom.js

import React from 'react';
import {shallow} from 'enzyme';
import Example from '../';

test('Example component parses default text', () => {
  const example = shallow(
    <Example />
  );

  expect(example.text()).toEqual('Example Component');
});